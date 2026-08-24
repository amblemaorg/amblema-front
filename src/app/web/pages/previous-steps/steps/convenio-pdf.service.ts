import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ConvenioPdfService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public isConvenioStep(devName: string): boolean {
    if (!devName) return false;
    const name = devName.toLowerCase();
    return (
      name.includes("agreement") ||
      name.includes("coordinatorinitialworkshop") ||
      name === "sponsoragreementschool" ||
      name === "schoolagreementsponsor" ||
      name === "schoolagreementfoundation" ||
      name === "sponsoragreementschoolfoundation"
    );
  }

  public generateConvenioPdf(projectId: string, stepDevName: string): void {
    if (!projectId) return;

    this.http.get<any>(`${this.baseUrl}projects/${projectId}`).subscribe(
      (project) => {
        this.buildAndDownloadPdf(project, stepDevName);
      },
      (error) => {
        console.error("Error fetching project data for Convenio PDF:", error);
      }
    );
  }

  public generateTripartiteAgreementPdf(project: any): void {
    if (!project) return;
    const filename = `Convenio_Fundacion_Padrino_Escuela_${this.cleanName(
      project.school?.name
    )}.pdf`;
    const htmlContent = this.getTripartiteAgreementTemplate(project);
    this.printOrSavePdf(htmlContent, filename);
  }

  private buildAndDownloadPdf(project: any, stepDevName: string): void {
    const devName = (stepDevName || "").toLowerCase();
    let htmlContent = "";
    let filename = "Convenio.pdf";

    if (
      devName.includes("sponsoragreementschool") ||
      devName.includes("schoolagreementsponsor")
    ) {
      htmlContent = this.getSponsorSchoolTemplate(project);
      filename = `Convenio_Escuela_Padrino_${this.cleanName(
        project.school?.name
      )}.pdf`;
    } else if (
      devName.includes("schoolagreementfoundation") ||
      devName.includes("sponsoragreementschoolfoundation")
    ) {
      htmlContent = this.getSchoolFoundationTemplate(project);
      filename = `Convenio_Escuela_Fundacion_${this.cleanName(
        project.school?.name
      )}.pdf`;
    } else if (devName.includes("coordinatorinitialworkshop")) {
      htmlContent = this.getCoordinatorFoundationTemplate(project);
      filename = `Acuerdo_Coordinador_Fundacion_${this.cleanName(
        project.coordinator?.name
      )}.pdf`;
    } else {
      htmlContent = this.getSponsorSchoolTemplate(project);
    }

    this.printOrSavePdf(htmlContent, filename);
  }

  private cleanName(str: string): string {
    if (!str) return "AmbLeMa";
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "_");
  }

  private formatDate(): string {
    const today = new Date();
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    return `${today.getDate()} de ${months[today.getMonth()]} de ${today.getFullYear()}`;
  }

  private getStepHistoryData(project: any, devName: string): any {
    if (!project?.stepsProgress?.steps) return null;
    const steps = project.stepsProgress.steps;
    const step = steps.find((s: any) => s.devName === devName);
    if (step && step.approvalHistory && step.approvalHistory.length > 0) {
      const lastHistory =
        step.approvalHistory[step.approvalHistory.length - 1];
      return lastHistory?.data || null;
    }
    return null;
  }

  private getSchoolData(project: any): any {
    if (project?.school?.address || project?.school?.principalFirstName) {
      return project.school;
    }
    const stepHist =
      this.getStepHistoryData(project, "coordinatorFillSchoolForm") ||
      this.getStepHistoryData(project, "sponsorFillSchoolForm");
    return stepHist || project?.school || {};
  }

  private getSponsorData(project: any): any {
    if (project?.sponsor?.address || project?.sponsor?.contactFirstName) {
      return project.sponsor;
    }
    const stepHist = this.getStepHistoryData(
      project,
      "coordinatorFillSponsorForm"
    );
    return stepHist || project?.sponsor || {};
  }

  private formatFullAddress(entity: any): string {
    if (!entity) return "____________________";
    const parts = [];

    // Street Address
    if (entity.address) parts.push(entity.address);
    else if (entity.addressHome) parts.push(entity.addressHome);

    // Municipality
    if (entity.addressMunicipality?.name)
      parts.push(entity.addressMunicipality.name);
    else if (
      typeof entity.addressMunicipality === "string" &&
      entity.addressMunicipality
    )
      parts.push(entity.addressMunicipality);
    else if (entity.municipality?.name) parts.push(entity.municipality.name);
    else if (typeof entity.municipality === "string" && entity.municipality)
      parts.push(entity.municipality);

    // City
    if (entity.addressCity) parts.push(entity.addressCity);
    else if (entity.city) parts.push(entity.city);

    // State
    if (entity.addressState?.name) parts.push(entity.addressState.name);
    else if (typeof entity.addressState === "string" && entity.addressState)
      parts.push(entity.addressState);
    else if (entity.state?.name) parts.push(entity.state.name);
    else if (typeof entity.state === "string" && entity.state)
      parts.push(entity.state);

    return parts.length > 0 ? parts.join(", ") : "____________________";
  }

  private getPrincipalName(project: any): string {
    const sch = this.getSchoolData(project);
    const combined = `${sch.principalFirstName || ""} ${sch.principalLastName || ""
      }`.trim();
    if (combined) return combined;
    return sch.principalName || sch.principal?.name || "____________________";
  }

  private getSponsorContactName(project: any): string {
    const sp = this.getSponsorData(project);
    const combined = `${sp.contactFirstName || ""} ${sp.contactLastName || ""
      }`.trim();
    if (combined) return combined;
    return sp.contactName || sp.contact?.name || "____________________";
  }

  private getSponsorPosition(project: any): string {
    const sp = this.getSponsorData(project);
    return sp.contactPosition || sp.contact?.position || "Representante";
  }

  private getCoordinatorName(project: any): string {
    if (!project?.coordinator) return "____________________";
    const co = project.coordinator;
    const combined = `${co.firstName || ""} ${co.lastName || ""}`.trim();
    if (combined) return combined;
    return co.name || "____________________";
  }

  private getCoordinatorId(project: any): string {
    if (!project?.coordinator) return "____________________";
    const co = project.coordinator;
    let prefix = "";
    if (co.cardType === "1") prefix = "V-";
    else if (co.cardType === "2") prefix = "J-";
    else if (co.cardType === "3") prefix = "E-";

    const card = co.cardId || co.documentId || co.id || "";
    if (card) return `${prefix}${card}`;
    return "____________________";
  }

  private printOrSavePdf(
    htmlContent: string,
    filename: string
  ): void {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert(
        "Por favor habilite las ventanas emergentes para generar la vista previa del Convenio."
      );
      return;
    }
    const fullHtml = this.wrapInPaperPreviewContainer(
      filename,
      htmlContent
    );
    printWindow.document.write(fullHtml);
    printWindow.document.close();
    printWindow.focus();
  }

  private wrapInPaperPreviewContainer(
    title: string,
    innerHtml: string
  ): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8"/>
        <title>${title}</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background-color: #525659;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #222;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
          }
          
          /* Fixed Top Toolbar */
          .toolbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 56px;
            background-color: #323639;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 24px;
            z-index: 9999;
            color: #fff;
          }
          .toolbar-title {
            font-size: 15px;
            font-weight: 500;
            color: #f1f1f1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .toolbar-actions {
            display: flex;
            gap: 12px;
          }
          .btn-action {
            background-color: #00809A;
            color: #ffffff;
            border: none;
            padding: 9px 18px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: background-color 0.2s;
          }
          .btn-action:hover {
            background-color: #006478;
          }
          .btn-close {
            background-color: #6c757d;
          }
          .btn-close:hover {
            background-color: #5a6268;
          }

          /* A4 Paper Sheet Wrapper */
          .paper-wrapper {
            margin-top: 76px;
            margin-bottom: 40px;
          }
          .paper-sheet {
            width: 210mm;
            min-height: 297mm;
            padding: 25mm 20mm;
            background: #ffffff;
            box-shadow: 0 4px 18px rgba(0,0,0,0.35);
            border-radius: 2px;
            position: relative;
          }

          /* Internal Document Styling */
          .header-banner { background-color: #d4edda; color: #155724; text-align: center; font-weight: bold; font-size: 13pt; padding: 10px; margin-bottom: 20px; border-radius: 4px; }
          .header-title { font-weight: bold; text-align: center; font-size: 14pt; margin-bottom: 25px; line-height: 1.4; text-transform: uppercase; }
          .date-right { text-align: right; font-weight: bold; margin-bottom: 25px; font-size: 11pt; }
          .section-title { text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 20px; }
          .sec-title { font-weight: bold; font-size: 11pt; margin-top: 15px; margin-bottom: 5px; }
          .content-p { text-align: justify; margin-bottom: 15px; font-size: 11pt; line-height: 1.6; }
          p { text-align: justify; margin-bottom: 10px; font-size: 10.5pt; line-height: 1.5; }
          ul { margin-top: 5px; margin-bottom: 10px; padding-left: 20px; font-size: 10.5pt; }
          li { margin-bottom: 4px; }
          .bold-val { font-weight: bold; text-decoration: underline; }
          .signatures { margin-top: 50px; display: flex; justify-content: space-between; page-break-inside: avoid; }
          .sig-box { width: 45%; text-align: center; }
          .sig-line { border-top: 1px solid #000; margin-top: 50px; padding-top: 8px; font-weight: bold; font-size: 9pt; text-transform: uppercase; }
          .info-block { display: flex; justify-content: space-between; margin-top: 30px; page-break-inside: avoid; }
          .info-box { width: 48%; }

          /* Print Overrides */
          @media print {
            .no-print { display: none !important; }
            body { background: #ffffff !important; }
            .paper-wrapper { margin: 0 !important; }
            .paper-sheet {
              width: 100% !important;
              min-height: auto !important;
              padding: 0 !important;
              box-shadow: none !important;
              border-radius: 0 !important;
            }
            @page {
              size: letter portrait;
              margin: 20mm 15mm;
            }
          }
        </style>
      </head>
      <body>
        <div class="toolbar no-print">
          <div class="toolbar-title">${title}</div>
          <div class="toolbar-actions">
            <button class="btn-action" onclick="window.print()">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/><path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/></svg>
              Descargar / Imprimir PDF
            </button>
            <button class="btn-action btn-close" onclick="window.close()">✕ Cerrar</button>
          </div>
        </div>

        <div class="paper-wrapper">
          <div class="paper-sheet">
            ${innerHtml}
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getSponsorSchoolTemplate(project: any): string {
    const schoolData = this.getSchoolData(project);
    const sponsorData = this.getSponsorData(project);
    const schoolName =
      schoolData?.name || project.school?.name || "____________________";
    const schoolAddress = this.formatFullAddress(schoolData);
    const principalName = this.getPrincipalName(project);
    const sponsorName =
      sponsorData?.name ||
      project.sponsor?.name ||
      project.sponsor?.company ||
      "____________________";
    const sponsorContact = this.getSponsorContactName(project);
    const sponsorPosition = this.getSponsorPosition(project);
    const sponsorAddress = this.formatFullAddress(sponsorData);
    const dateStr = this.formatDate();
    const location =
      schoolData?.addressState?.name || schoolData?.state?.name || "LUGAR";

    return `
      <div class="header-title">CARTA DE CONVENIO ESCUELA – PADRINO</div>
      <div class="date-right">${location.toUpperCase()}, ${dateStr.toUpperCase()}</div>
      <div class="section-title">REUNIDOS</div>
      
      <p class="content-p">
        En las instalaciones de la <span class="bold-val">${schoolName}</span>, ubicada en <span class="bold-val">${schoolAddress}</span>, la profesora (a) <span class="bold-val">${principalName}</span>, en su condición de Directora (o), y el ciudadano <span class="bold-val">${sponsorContact}</span> en su condición de <span class="bold-val">${sponsorPosition}</span> de la <span class="bold-val">${sponsorName}</span> con domicilio en <span class="bold-val">${sponsorAddress}</span>, luego de exponer al personal directivo y docentes de la institución los resultados del trabajo que viene realizando la <strong>Fundación AmbLeMa</strong> en diferentes escuelas del país, acordamos:
      </p>

      <p class="content-p">
        <strong>1.-</strong> Trabajar en conjunto para lograr la implementación de la Herramienta Educativa AmbLeMa en la escuela <span class="bold-val">${schoolName}</span>.
      </p>

      <p class="content-p">
        <strong>2.-</strong> Para ello, el <strong>personal directivo y docente</strong> asume con responsabilidad y sentido de pertenencia la implementación y supervisión constante de la Herramienta Educativa AmbLeMa.
      </p>

      <p class="content-p">
        <strong>3.-</strong> Asimismo, nosotros la <strong>Empresa <span class="bold-val">${sponsorName}</span></strong>, por medio de la responsabilidad social de nuestra empresa haremos realidad la implementación de la Herramienta Educativa AmbLeMa.
      </p>

      <p class="content-p">
        <strong>4. Notificar a la Fundación AmbLeMa sobre nuestro compromiso</strong>, confiados que la aplicación de AmbLeMa será una estupenda oportunidad para afianzar la búsqueda de la calidad educativa de los docentes y personal de la institución; como también, sin duda, un eficaz beneficio para los estudiantes, cuyos resultados esperamos ver pronto con satisfacción.
      </p>

      <p class="content-p">
        Y, en prueba de conformidad, ambas partes firman el presente convenio de colaboración, en la ciudad y en la fecha mencionada, por triplicado y a un sólo efecto.
      </p>

      <div class="signatures">
        <div class="sig-box">
          <div class="sig-line">
            Firma<br/>
            ${principalName}<br/>
            <span style="font-size: 8pt;">DIRECTOR DEL PLANTEL EDUCATIVO</span>
          </div>
        </div>
        <div class="sig-box">
          <div class="sig-line">
            Firma<br/>
            ${sponsorContact}<br/>
            <span style="font-size: 8pt;">${sponsorPosition}</span>
          </div>
        </div>
      </div>
    `;
  }

  private getSchoolFoundationTemplate(project: any): string {
    const schoolData = this.getSchoolData(project);
    const sponsorData = this.getSponsorData(project);
    const schoolName =
      schoolData?.name || project.school?.name || "____________________";
    const schoolAddress = this.formatFullAddress(schoolData);
    const principalName = this.getPrincipalName(project);
    const sponsorName =
      sponsorData?.name ||
      project.sponsor?.name ||
      project.sponsor?.company ||
      "____________________";
    const dateStr = this.formatDate();
    const location =
      schoolData?.addressState?.name || schoolData?.state?.name || "LUGAR";

    return `
      <div class="header-title">CARTA DE CONVENIO ESCUELA – FUNDACIÓN AMBLEMA</div>
      <div class="date-right">${location.toUpperCase()}, ${dateStr.toUpperCase()}</div>
      <div class="section-title">REUNIDOS</div>
      
      <p class="content-p">
        En las instalaciones de la <span class="bold-val">${schoolName}</span>, ubicada en <span class="bold-val">${schoolAddress}</span>, la profesora (a) <span class="bold-val">${principalName}</span>, en su condición de Directora (o), y el profesor <span class="bold-val">Tomás Linares</span>, en su condición de <span class="bold-val">Vice-Presidente de la Fundación AmbLeMa</span>, luego de exponer al personal directivo y docentes de la institución los resultados del trabajo que viene realizando la <strong>Fundación AmbLeMa</strong> en diferentes escuelas del país, acordamos:
      </p>

      <p class="content-p">
        <strong>1.-</strong> Trabajar en conjunto para lograr la implementación de la Herramienta Educativa AmbLeMa en la escuela <span class="bold-val">${schoolName}</span>.
      </p>

      <p class="content-p">
        <strong>2.-</strong> Para ello, el <strong>personal directivo y docente</strong> asume con responsabilidad y sentido de pertenencia la implementación y supervisión constante de la Herramienta Educativa AmbLeMa.
      </p>

      <p class="content-p">
        <strong>3.-</strong> Asimismo, nosotros <strong>Fundación AmbLeMa</strong>, brindaremos la asesoría y el seguimiento constante a través de nuestro Coordinador AmbLeMa, quien velará para que se implemente la Herramienta Educativa y se cumplan todas las actividades programadas.
      </p>

      <p class="content-p">
        <strong>4.</strong> De igual manera, acordamos mantener comunicación constante con el <strong>Padrino <span class="bold-val">${sponsorName}</span> (Empresa o Fundación)</strong> de la institución, a quién informaremos de los avances obtenidos e invitaremos a las actividades especiales para que detalle el progreso de los estudiantes.
      </p>

      <p class="content-p">
        Y, en prueba de conformidad, ambas partes firman el presente convenio de colaboración, en la ciudad y en la fecha mencionada, por triplicado y a un sólo efecto.
      </p>

      <div class="signatures">
        <div class="sig-box">
          <div class="sig-line">
            Firma<br/>
            ${principalName}<br/>
            <span style="font-size: 8pt;">DIRECTOR DEL PLANTEL EDUCATIVO</span>
          </div>
        </div>
        <div class="sig-box">
          <div class="sig-line">
            Firma<br/>
            Tomás Linares<br/>
            <span style="font-size: 8pt;">VICE PRESIDENTE FUNDACIÓN AMBLEMA</span>
          </div>
        </div>
      </div>
    `;
  }

  private getCoordinatorFoundationTemplate(project: any): string {
    const coordinatorName = this.getCoordinatorName(project);
    const coordinatorId = this.getCoordinatorId(project);
    const schoolData = this.getSchoolData(project);
    const schoolName =
      schoolData?.name || project.school?.name || "____________________";
    const schoolAddress = this.formatFullAddress(schoolData);
    const dateStr = this.formatDate();

    return `
      <div class="header-banner">
        Acuerdo-Compromiso entre el Coordinador-Voluntario AmbLeMa y Fundación AmbLeMa
      </div>

      <div class="sec-title">1. Propósito General del Acuerdo</div>
      <p>
        Este acuerdo establece los términos y condiciones bajo los cuales el <strong>Coordinador-Voluntario AmbLeMa</strong> (en adelante, “el Coordinador”) participará en las actividades de la <strong>Fundación AmbLeMa</strong> (en adelante, “la Fundación”).
      </p>
      <p>Podrán existir dos modalidades de Coordinadores:</p>
      <ul>
        <li><strong>Coordinador de Escuela:</strong> responsable de las funciones propias en la escuela asignada.</li>
        <li><strong>Coordinador Asesor:</strong> encargado de tareas específicas dentro de la Fundación.</li>
      </ul>

      <div class="sec-title">2. Calificaciones del Coordinador</div>
      <p>El Coordinador certifica que:</p>
      <ul>
        <li>Posee al menos un diploma de educación secundaria.</li>
        <li>Ha realizado una entrevista de aprobación con un directivo de la Fundación.</li>
        <li>Reside cerca de la escuela donde ejercerá funciones o cuenta con facilidad de acceso por sus propios medios.</li>
        <li>Dispone del tiempo necesario para cumplir con las labores asignadas, comprometiéndose a dedicar <strong>al menos dos jornadas completas por semana</strong>.</li>
      </ul>

      <div class="sec-title">3. Naturaleza del Acuerdo y Condición Financiera</div>
      <p>
        El Coordinador declara que <strong>este acuerdo no constituye una relación laboral</strong> con la Fundación.
      </p>
      <p>
        El Coordinador afirma que se encuentra en una situación financiera que le permite realizar trabajo voluntario.
      </p>
      <p>
        Cualquier aporte económico recibido será exclusivamente en forma de <strong>reembolso por concepto de viáticos, y no generará vínculo laboral</strong> entre empleador y empleado.
      </p>
      <p>Los viáticos podrán ser entregados:</p>
      <ul>
        <li><strong>Directamente por el Padrino</strong> que financia la aplicación de la Herramienta Educativa AmbLeMa en la escuela.</li>
        <li><strong>A través de la Fundación</strong>, cuando esta actúe como intermediaria para entregar los aportes aprobados por el Padrino.</li>
      </ul>
      <p>La periodicidad de estos aportes será definida por el Padrino y/o la Fundación, en acuerdo con el Coordinador.</p>

      <div class="sec-title">4. Renovación y Terminación del Acuerdo</div>
      <p>Este acuerdo podrá ser terminado en cualquier momento por cualquiera de las partes, de manera amistosa y con aviso previo.</p>

      <div class="sec-title">5. Funciones del Coordinador</div>
      <p>El Coordinador se compromete a:</p>
      <ul>
        <li>Visitar la escuela al menos dos veces por semana.</li>
        <li>Ejecutar las tareas establecidas en la agenda de actividades de AmbLeMa.</li>
        <li>Reunirse con directivos y docentes para orientar la aplicación de la Herramienta Educativa.</li>
        <li>Planificar y desarrollar las actividades previstas durante el año escolar.</li>
        <li>Mantener actualizado el formulario PECA.</li>
        <li>Aplicar los diagnósticos establecidos a los estudiantes.</li>
        <li>Usar el uniforme correspondiente y mantener una presentación personal adecuada.</li>
        <li>Cumplir con un código de conducta acorde al personal educativo de la escuela.</li>
      </ul>

      <div class="sec-title">6. Deberes de la Fundación</div>
      <p>La Fundación se compromete a:</p>
      <ul>
        <li>Brindar entrenamiento y capacitación al Coordinador.</li>
        <li>Realizar seguimiento a las actividades programadas y al desempeño del Coordinador.</li>
      </ul>

      <div class="sec-title">7. Aceptación del Acuerdo</div>
      <p>Por la presente, ambas partes aceptan los términos y condiciones establecidos en este acuerdo.</p>

      <div class="info-block">
        <div class="info-box">
          <strong>Información del Coordinador AmbLeMa</strong>
          <div class="sig-line">
            Nombre y firma: <span class="bold-val">${coordinatorName}</span><br/>
            Cédula de identidad: <span class="bold-val">${coordinatorId}</span>
          </div>
        </div>
        <div class="info-box">
          <strong>Representante de la Fundación</strong>
          <div class="sig-line">
            Nombre y firma: <span class="bold-val">Tomás Linares</span><br/>
            <span style="font-size: 9pt;">Vice-Presidente de la Fundación AmbLeMa</span>
          </div>
        </div>
      </div>

      <div style="margin-top: 20px;">
        <strong>Información de la Escuela</strong><br/>
        Nombre de la escuela: <span class="bold-val">${schoolName}</span><br/>
        Ubicación: <span class="bold-val">${schoolAddress}</span><br/><br/>
        Fecha: <span class="bold-val">${dateStr}</span>
      </div>
    `;
  }

  public getTripartiteAgreementTemplate(project: any): string {
    const schoolData = this.getSchoolData(project);
    const sponsorData = this.getSponsorData(project);
    const schoolName =
      schoolData?.name || project.school?.name || "____________________";
    const principalName = this.getPrincipalName(project);

    const sponsorName =
      sponsorData?.name ||
      project.sponsor?.name ||
      project.sponsor?.company ||
      "____________________";
    const sponsorContactName = this.getSponsorContactName(project);
    const sponsorPosition = sponsorData?.contactPosition || "Representante";

    const today = new Date();
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const day = today.getDate();
    const monthName = months[today.getMonth()];
    const year = today.getFullYear();

    const sigs = project.agreementSignatures || [];
    const schoolSig = sigs.find((s: any) => s.role === "school");
    const sponsorSig = sigs.find((s: any) => s.role === "sponsor");
    const amblemaSig = sigs.find((s: any) => s.role === "amblema");

    const renderSigBox = (sig: any, defaultTitle: string) => {
      if (sig && sig.signatureData) {
        return `
          <div style="height: 65px; display: flex; align-items: flex-end; justify-content: center; margin-bottom: 4px;">
            <img src="${sig.signatureData}" style="max-height: 60px; max-width: 170px; object-fit: contain;" />
          </div>
        `;
      }
      return `
        <div style="height: 65px; border-bottom: 1px dashed #aaa; display: flex; align-items: flex-end; justify-content: center; margin-bottom: 4px;">
          <span style="font-size: 8pt; color: #888; font-style: italic;">[Pendiente por firmar]</span>
        </div>
      `;
    };

    const schoolSigHtml = renderSigBox(schoolSig, "DIRECTOR DEL PLANTEL");
    const sponsorSigHtml = renderSigBox(sponsorSig, "REPRESENTANTE DEL PADRINO");
    const amblemaSigHtml = renderSigBox(amblemaSig, "VICE-PRESIDENTE FUNDACIÓN AMBLEMA");

    return `
      <div style="page-break-after: always; padding-bottom: 20px;">
        <div class="header-title" style="margin-bottom: 30px;">
          CARTA-CONVENIO DE COOPERACIÓN INSTITUCIONAL
        </div>

        <p class="content-p" style="text-align: justify; line-height: 1.6; margin-bottom: 20px;">
          Conste por el presente documento la Carta-Convenio de Cooperación Institucional que suscriben por una parte la <strong>Escuela <span class="bold-val">${schoolName}</span></strong>, representada en este acto por su Director(a) y la directiva del equipo docente; por otra parte la <strong>Empresa/Institución <span class="bold-val">${sponsorName}</span></strong>, en lo sucesivo denominada "El Padrino", representada por <strong><span class="bold-val">${sponsorContactName}</span></strong>; y por otra parte la <strong>Fundación AmbLeMa</strong>, representada por <strong>Tomás Linares</strong>.
        </p>

        <div class="sec-title" style="font-weight: bold; font-size: 11pt; margin-top: 20px; margin-bottom: 10px;">ANTECEDENTES Y SOLICITUD</div>
        <p class="content-p" style="text-align: justify; line-height: 1.6; margin-bottom: 20px;">
          La directiva del equipo docente de la <strong>Escuela <span class="bold-val">${schoolName}</span></strong>, tras conocer de manera detallada la Herramienta Educativa desarrollada por la Fundación AmbLeMa, manifiesta su interés formal en incorporar dicho modelo en el proyecto pedagógico de la institución. En virtud de ello, solicita formalmente el respaldo técnico de la Fundación AmbLeMa y el patrocinio de <strong><span class="bold-val">${sponsorName}</span></strong> para asumir de manera conjunta el compromiso de aplicar las propuestas e iniciativas educativas de la Fundación en la comunidad escolar.
        </p>

        <div class="sec-title" style="font-weight: bold; font-size: 11pt; margin-top: 20px; margin-bottom: 10px;">COMPROMISOS DE LAS PARTES</div>
        <div style="margin-left: 10px;">
          <p><strong>1. De la Escuela <span class="bold-val">${schoolName}</span>:</strong></p>
          <ul style="margin-left: 20px; margin-top: 6px; margin-bottom: 16px;">
            <li>Asumir el compromiso institucional y pedagógico de implementar las propuestas y estrategias operativas presentadas por la Fundación AmbLeMa.</li>
            <li>Promover la participación activa del cuerpo docente, personal administrativo y directivo en las actividades programadas a lo largo del año escolar.</li>
            <li>Velar por la correcta aplicación del programa dentro de las aulas de clase y en la dinámica comunitaria escolar.</li>
          </ul>

          <p><strong>2. De El Padrino (<span class="bold-val">${sponsorName}</span>):</strong></p>
          <ul style="margin-left: 20px; margin-top: 6px; margin-bottom: 16px;">
            <li>Aportar oportunamente los recursos económicos necesarios para el financiamiento de la herramienta y el desarrollo de sus actividades en el plantel.</li>
          </ul>
        </div>
      </div>

      <div style="padding-top: 10px;">
        <div style="margin-left: 10px;">
          <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li>Mantener un vínculo constante y de cercanía con la escuela, con el fin de acompañar la ejecución y garantizar que la inversión social sea efectiva en beneficio directo de los estudiantes y docentes.</li>
          </ul>

          <p><strong>3. De la Fundación AmbLeMa:</strong></p>
          <ul style="margin-left: 20px; margin-top: 6px; margin-bottom: 24px;">
            <li>Proporcionar y acompañar la implementación de las estrategias educativas planteadas al equipo docente.</li>
            <li>Brindar asesoría pedagógica continua durante el transcurso del año escolar.</li>
            <li>Orientar los esfuerzos de la herramienta hacia el logro comprobable de mayores niveles de calidad educativa en el plantel.</li>
          </ul>
        </div>

        <p class="content-p" style="text-align: justify; line-height: 1.6; margin-top: 20px; margin-bottom: 40px;">
          En fe de conformidad y para que así conste, las partes firman el presente convenio a los <strong>${day}</strong> días del mes de <strong>${monthName}</strong> de <strong>${year}</strong>.
        </p>

        <div style="display: flex; justify-content: space-between; gap: 10px; margin-top: 30px; page-break-inside: avoid;">
          <!-- ESCUELA -->
          <div style="width: 32%; text-align: center;">
            <strong style="font-size: 8pt; text-transform: uppercase;">POR LA ESCUELA ${schoolName}</strong><br/><br/>
            ${schoolSigHtml}
            <div style="border-top: 1px solid #333; padding-top: 6px; font-size: 8pt;">
              <strong>${principalName}</strong><br/>
              Director(a) de la Escuela ${schoolName}<br/>
              <span style="font-size: 7pt; color: #555;">Representante de la Directiva Docente</span>
            </div>
          </div>

          <!-- PADRINO -->
          <div style="width: 32%; text-align: center;">
            <strong style="font-size: 8pt; text-transform: uppercase;">POR EL PADRINO (${sponsorName})</strong><br/><br/>
            ${sponsorSigHtml}
            <div style="border-top: 1px solid #333; padding-top: 6px; font-size: 8pt;">
              <strong>${sponsorContactName}</strong><br/>
              ${sponsorPosition}<br/>
              <span style="font-size: 7pt; color: #555;">${sponsorName}</span>
            </div>
          </div>

          <!-- FUNDACIÓN AMBLEMA -->
          <div style="width: 32%; text-align: center;">
            <strong style="font-size: 8pt; text-transform: uppercase;">POR LA FUNDACIÓN AMBLEMA</strong><br/><br/>
            ${amblemaSigHtml}
            <div style="border-top: 1px solid #333; padding-top: 6px; font-size: 8pt;">
              <strong>Tomás Linares</strong><br/>
              Vice-Presidente de la Fundación AmbLeMa<br/>
              <span style="font-size: 7pt; color: #555;">Fundación AmbLeMa</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
