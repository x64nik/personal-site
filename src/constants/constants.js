export const projects = [
  {
    title: "Bind DNS & Traefik",
    description:
      "Adding a self hosted DNS in homelab with traefik to enable tls over all routes and automating it with the help of ansible and terraform",
    // image: "images/jpgs/",
    // imageWebp: "images/webps/",
    // images: [
    //   {
    //     original: "images/projects/binddns/img.jpg",
    //     loading: "lazy",
    //     originalAlt: "bind dns",
    //   },

    // ],
    tags: ["Proxmox", "Docker", "DNS", "Traefik" ],
    id: 1,
    order: 100,
    mainType: "proxmox",
  },
  {
    title: "Pihole & Nginx",
    description:
      "Deploying a DNS in home lab for all services with the help of Pihole a free and opensource DNS server, Nginx is used to apply ssl certs to each and every record created on DNS server",
    image: "images/jpgs/pihole3.jpg",
    imageWebp: "images/webps/pihole3.webp",
    images: [
      {
        original: "images/projects/pihole/pihole1.png",
        loading: "lazy",
        originalAlt: "sleet",
      },
      {
        original: "images/projects/pihole/pihole2.png",
        loading: "lazy",
        originalAlt: "sleet",
      },
      {
        original: "images/projects/pihole/pihole3.png",
        loading: "lazy",
        originalAlt: "sleet",
      }

    ],
    tags: ["Pihole", "Nginx", "DNS" ],
    id: 6,
    order: 98,
    mainType: "proxmox",
  },
  {
    title: "ArgoCD automated deployment",
    description:
      "Deploying and managing (autoscaling and autohealing) application on k8s cluster with argocd (selfhosted) and reverse proxy handled by traefik with tls enabled",
    image: "images/jpgs/argocd.jpg",
    imageWebp: "images/webps/argocd.webp",
    images: [
      {
        original:
          "images/projects/argocd/argocd.png",
        loading: "lazy",
        originalAlt: "argocd cicd",
      },

    ],
    tags: [
      "ArgoCD",
      "CICD",
      "Kubernetes",
    ],
    id: 4,
    order: 94,
    mainType: "argocd",
  },
  {
    title: "Jenkins CICD",
    description:
      "A springboot application which is build and deployed by jenkins on k8s cluster ",
    image: "images/jpgs/jenkins.jpg",
    imageWebp: "images/webps/jenkins.webp",
    images: [
      {
        original:
          "images/projects/jenkins/jenkins.png",
        loading: "lazy",
        originalAlt: "jenkins cicd",
      },

    ],
    tags: [
      "Jenkins",
      "Docker",
      "Kubernetes",
    ],
    id: 7,
    order: 93,
    mainType: "jenkins",
  },
  {
    title: "CircleCI CICD",
    description:
      "A simple flask app which is build and deployed with the help of circleci a cicd automation tool.",
    image: "images/jpgs/cci.jpg",
    imageWebp: "images/webps/cci.webp",
    images: [
      {
        original: "images/projects/circleci/cci.png",
        loading: "lazy",
        originalAlt: "circle cicd",
      },
    ],
    tags: [
      "CircleCI",
      "git",
      "Docker",
      "Kubernetes",

    ],
    id: 9,
    order: 91,
    mainType: "circleci",
  },
  {
    title: "Proxmox HomeServer",
    description:
      "Building a Homelab for DevOps projects and to mirror cloud like infrastructure in home each and every single service will is self hosted",
    image: "images/jpgs/proxmox.jpg",
    imageWebp: "images/webps/proxmox.webp",
    images: [
      {
        original: "images/projects/proxmox-homeserver/proxmox.png",
        loading: "lazy",
        originalAlt: "proxmox ui",
      },
      {
        original: "images/projects/proxmox-homeserver/hardware-proxmox.png",
        loading: "lazy",
        originalAlt: "proxmox hardware",
      },
    ],
    tags: [
      "Proxmox",
      "VirtualMachines",
      "Cloudinit",
      "DNS",
      "Containers",
    ],
    id: 12,
    order: 88,
    mainType: "proxmox",
  },
];

export const TimeLineData = [
  { year: 2023, text: "Starting my journey as a DevOps intern" },

];
