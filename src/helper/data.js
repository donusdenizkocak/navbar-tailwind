const data = [
    {
      navtext: 'Anasayfa',
      nlink: '#'
    },
    {
      navtext: 'Hizmetlerimiz',
    nlink: '#',
      navchildren: [
        {
          navtext: 'Teknik Hizmetlerimiz',
        nlink: '#',
          navchildren: [
            {
              navtext: 'Frontend Teknolojileri',
              nlink: '#'
            },
            {
              navtext: 'Backend Teknolojileri',
              nlink: '#'
            },
            {
              navtext: 'AWS Hizmetleri',
              nlink: '#'
            }
          ]
        },
        {
          navtext: 'Danışmanlık Hizmetlerimiz',
          nlink: '#',
          navchildren: [
            {
              navtext: 'Teknik Destek',
              nlink: '#'
            },
            {
              navtext: 'Bilgilendirme Hizmetleri',
              nlink: '#'
            },
            {
              navtext: 'Mentorluk Hizmetleri',
              nlink: '#'
            },
            {
              navtext: 'Danışmanlık Eğitimleri',
              nlink: '#',
              navchildren: [
                {
                  navtext: 'Sertifikalı Danışmanlık Hizmeti',
                  nlink: '#'
                },
                {
                  navtext: 'Kurumsal Danışmanlık Hizmeti',
                  nlink: '#'
                }
              ]
            },
            {
              navtext: 'Eğitim Öğretim Planlama',
              nlink: '#'
            },
            {
              navtext: 'Yazılım Danışmanlıgı',
              nlink: '#'
            },
            {
                navtext: 'Proje Danışmanlıgı',
                nlink: '#'
            }
        ]},
        {
            navtext: 'Hatalı Altyapı Onarımı',
            nlink: '#'
        }
      ]
    },
    {
        navtext: 'Hakkımızda',
        nlink: '#',
        navchildren: [
          { 
            navtext: 'Biz Kimiz?',
            nlink: '#'
          },
          { 
            navtext: 'Kurumsal',
            nlink: '#'
          },
          { 
            navtext: 'Referanslarımız',
            nlink: '#',
            navchildren: [
                {
                  navtext: 'Geçmiş Referanslar',
                  nlink: '#',
                  navchildren: [
                    {
                      navtext: 'x referansı',
                      nlink: '#'
                    },
                    {
                      navtext: 'y referansı',
                      nlink: '#'
                    }, {
                        navtext: 'z referansı',
                        nlink: '#'
                      }
                  ]
             },
             {
                    navtext: 'Gelecek Referanslar',
                    nlink: '#',
                    navchildren: [
                    {
                        navtext: 'a referansı',
                        nlink: '#'
                    },
                    {
                        navtext: 'b referansı',
                        nlink: '#'
                    }, {
                        navtext: 'c referansı',
                        nlink: '#'
                        }
                    ]
                }
           ]
          },
          { 
            navtext: 'Vizyon',
            nlink: '#'
          },
          { 
            navtext: 'Misyon',
            nlink: '#'
          }
        ]
    },
    {
        navtext: 'İletişim',
        nlink: '#'
    },
    {
        navtext: 'Kayıt Ol',
        nlink: '#'
    },
    {
        navtext: 'Giriş Yap',
        nlink: '#'
    }
]

export default data;