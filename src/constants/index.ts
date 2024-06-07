import { Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";

import Consultoria from "../../public/img-services/consultoria.jpg"
import Planejamento from "../../public/img-services/office-scene-close-up.jpg"

export const navLinks = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "SOBRE",
    url: "/about",
  },
  {
    label: "SERVIÇOS",
    url: "/acting",
  },
  {
    label: "NOTÍCIAS",
    url: "news",
  },
  {
    label: "BLOG",
    url: "blog",
  },
  {
    label: "FALE CONOSCO",
    url: "contact",
  },
];
export const services = [
  {
    id: 1,
    name: "Consultoria Tributária",
    description:
      "Oferecemos consultoria personalizada para ajudar empresas e indivíduos a entenderem e cumpram suas obrigações fiscais, otimizando impostos pagos e evitando penalidades.",
    icon: Consultoria,
  },
  {
    id: 2,
    name: "Planejamento Fiscal",
    description:
      "Desenvolvemos estratégias de planejamento fiscal para minimizar a carga tributária, incluindo a reestruturação de negócios, investimentos e transações internacionais.",
    icon: Planejamento,
  },
  {
    id: 3,
    name: "Litígios Tributários",
    description:
      "Representamos nossos clientes em disputas com as autoridades fiscais, buscando a melhor solução possível dentro do sistema jurídico brasileiro.",
    icon: Consultoria,
  },
  {
    id: 4,
    name: "Auditoria Interna Tributária",
    description:
      "Realizamos auditorias internas para identificar possíveis irregularidades fiscais, garantindo a conformidade contínua com as regulamentações tributárias.",
    icon: Planejamento,
  },
  {
    id: 5,
    name: "Consultoria Tributária",
    description:
      "Oferecemos consultoria personalizada para ajudar empresas e indivíduos a entenderem e cumpram suas obrigações fiscais, otimizando impostos pagos e evitando penalidades.",
    icon: Consultoria,
  },
];
export const socialLinks = [
  {
    id: 1,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://br.linkedin.com/in/mar%C3%ADlia-souza-925230118",
  },
  {
    id: 2,
    label: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/adv.marilia_/",
  },
];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: "+55 083 998310461",
  },
  {
    id: 2,
    icon: Mail,
    text: "z",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Campina Grande - PB",
  },
];