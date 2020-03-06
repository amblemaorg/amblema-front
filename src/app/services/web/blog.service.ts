import { Injectable } from '@angular/core';
import { Post } from '../../models/web/blog.model';
import { WebBlog } from '../../models/web/blog.model';
import { of, Observable } from 'rxjs';

const blogPage = {
  posts: [
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-2',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-3',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-4',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-5',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 5',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-6',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 6',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-7',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 7',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    },
    {
      mainImage: './assets/images/background-pillar-matematica.jpg',
      secondaryImage: '',
      slug: 'la-capacitacion-en-matematicas-induce-al-docente-en-el-razonamiento-8',
      title: 'La capacitación en matemáticas induce al docente en el razonamiento 8',
      content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nascetur vivamus congue dictum risus molestie urna, suspendisse ac sapien magna habitasse natoque. Eget mauris placerat erat nec curae non litora lobortis, mus sem primis accumsan velit cras praesent blandit nunc, justo neque euismod mollis lacus orci scelerisque. Id hendrerit metus mus iaculis vestibulum, tellus nostra vitae libero tincidunt facilisi, eleifend cubilia nibh leo. Condimentum molestie imperdiet turpis in velit fringilla maecenas nullam, enim rhoncus magna aptent sociis lacinia eu libero posuere, taciti rutrum commodo montes aenean congue est. Praesent nostra suscipit tempus congue lacinia cubilia hendrerit, a nam gravida convallis vulputate dignissim, leo lobortis quis cursus augue posuere. Iaculis duis sociosqu curabitur phasellus placerat dictumst consequat fames posuere, pharetra nunc scelerisque ante malesuada eros fermentum sed.',
      date: '18-02-2020',
      tags: ['Empezando', 'Tu comunidad'],
      status: 'published'
    }
  ]
}


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }


  getPostsListJSON(): Observable<WebBlog> {
    return of<WebBlog>(blogPage);
  }

  getPostBySlugJSON(slug): Observable<Post> {
    let post: Post;
    post = blogPage.posts.filter(item => item.slug === slug)[0];
    return of<Post>(post);
  }
}
