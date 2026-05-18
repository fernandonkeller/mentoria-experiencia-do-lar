import type {
  BenefitItem,
  FaqItem,
  HeroMetric,
  ModuleItem,
  TestimonialItem,
} from "@/types/content";

// Troque aqui o link oficial de pagamento quando a operação estiver pronta.
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "COLE_AQUI_O_LINK_DE_PAGAMENTO";

export const siteConfig = {
  name: "Mentoria do Lar",
  shortName: "Mentoria do Lar",
  description:
    "Landing page premium de apresentação, inscrição e pagamento da Mentoria do Lar com Sabrina Keller.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: "eu@sabrinakeller.com.br",
    whatsapp:
      process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/5554991759942",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://instagram.com/sabrinakeller",
  },
  hero: {
    eyebrow: "Mentoria Experiência do Lar",
    title: "Transforme o seu lar em uma habitação de amor e um refúgio de paz.",
    subtitle:
      "Uma experiência presencial, íntima e premium para mulheres que desejam viver princípios bíblicos com aplicações práticas no cotidiano do seu lar.",
    primaryCta: "Quero me inscrever",
    secondaryCta: "Ver detalhes da experiência",
    image: "/images/mentoria/sabrina-family.jpeg", // Troque a imagem principal aqui.
  },
  metrics: [
    { value: "+ 150", label: "mulheres e lares impactados" },
    { value: "8 encontros", label: "presenciais e guiados dentro do meu lar" },
    { value: "20h+", label: "de formação certificada" },
  ] satisfies HeroMetric[],
  about: {
    paragraph:
      "A Mentoria do Lar é um curso que estuda princípios bíblicos e aplicações práticas para fazer do nosso lar uma habitação de amor e um refúgio de paz, norteado pelo livro “Experiência do Lar”, de Devi Titus.",
    audience:
      "Para mulheres que desejam edificar o lar com sabedoria, mas se sentem sobrecarregadas, emocionalmente cansadas e precisam de direção, acolhimento e transformação para construir um ambiente de paz, amor e relacionamentos saudáveis.",
    transformation:
      "Ao final da jornada, a participante sai com repertório, comunhão, direção prática e uma rede de apoio para sustentar a transformação dentro de casa.",
    pains: [
      "Sentimento de sobrecarga e desorganização na rotina do lar.",
      "Desejo de alinhar casa, fé, casamento e maternidade com mais intencionalidade.",
      "Peso emocional que afeta a forma de viver e conduzir o lar.",
      "Ambiente da casa sem paz, leveza e direção clara.",
      "Desconexão familiar e dificuldade de nutrir relacionamentos saudáveis.",
      "Culpa constante por não conseguir sustentar tudo como gostaria.",
      "Falta de direção para tomar decisões e construir novas práticas.",
      "Cansaço mental que rouba presença, constância e discernimento.",
    ],
  },
  authority: {
    name: "Sabrina Keller",
    role: "Mentora de Mulheres",
    bio: "Sabrina Keller, cristã, evangélica luterana. Casada desde 2007 com Fernando. Mãe de um casal de filhos, Fabricio nascido em 2009 e Amanda nascida em 2010. Formada e pós-graduada em enfermagem. Atua cuidando da saúde mental como mentora desde 2019, ajudando mulheres na busca de autoconhecimento e desenvolvimento. E desde 2022, servindo com o ministério Home Experience, da Devi Titus. É um privilégio caminharmos juntas em Cristo na edificação de lares com o propósito de construir e restaurar familias.",
    credentials: [
      "Mais de 150 mulheres e lares já impactados",
      "Mentoria presencial com curadoria íntima e acompanhamento próximo",
      "Comunidade exclusiva após a formação",
    ],
    photo: "/images/mentoria/sabrina-authority.png", // Troque a foto da autoridade aqui.
  },
  payment: {
    upfront: "R$ 1.597,00 à vista",
    installments: "3x de R$ 597,00",
    pixKey: "eu@sabrinakeller.com.br",
    note: "Após o pagamento, a inscrição é confirmada e a participante recebe o direcionamento individual sobre a turma e o calendário.",
  },
};

export const benefits = [
  {
    icon: "book-open",
    title: "Conteúdo bíblico aplicado",
    description:
      "Princípios sólidos para alinhar fé, honra, hospitalidade e organização do lar.",
  },
  {
    icon: "house",
    title: "Transformação prática do lar",
    description:
      "Temas como etiqueta, mesa posta, limpeza da casa, decoração, culinária e hospitalidade.",
  },
  {
    icon: "cup-soda",
    title: "Experiência presencial premium",
    description:
      "Em todos os encontros teremos um tempo de mesa especial com delícias para desfrutar, tudo preparado para acolher com beleza e intencionalidade cada mulher.",
  },
  {
    icon: "badge-check",
    title: "Kit Exclusivo e Certificação",
    description:
      "Livro Experiência do Lar, Bíblia da Mulher com estudo direcionado, caneca exclusiva, presentes e brindes personalizados. Formatura e certificado de +20 horas de curso.",
  },
  {
    icon: "message-circle-heart",
    title: "Acesso direto à mentora",
    description:
      "Contato via WhatsApp pessoal para dúvidas, partilhas íntimas e suporte ao longo da jornada.",
  },
  {
    icon: "users",
    title: "Comunidade que permanece",
    description:
      "Entrada no Clube das Guardiãs do Lar, com encontro especial após a formatura e continuidade da conexão.",
  },
] satisfies BenefitItem[];

export const modules = [
  {
    step: "Módulo 1",
    title: "Fundamentos para um lar de paz",
    description:
      "Entendimento da visão bíblica de lar e da identidade feminina que sustenta um ambiente de amor.",
    bullets: [
      "Princípios do livro Experiência do Lar",
      "Casa como habitação de amor",
      "Cultura de paz e presença",
    ],
  },
  {
    step: "Módulo 2",
    title: "Casa, rotina e beleza prática",
    description:
      "Aplicações práticas para ordem, decoração, organização do ambiente e hospitalidade cotidiana.",
    bullets: [
      "Organização da casa",
      "Decoração com propósito",
      "Mesa posta, etiqueta e hospitalidade",
    ],
  },
  {
    step: "Módulo 3",
    title: "Relacionamentos e maternidade",
    description:
      "Conversas guiadas sobre relacionamento entre pais e filhos, comunicação e postura dentro do lar.",
    bullets: [
      "Relacionamento pais e filhos",
      "Tipos de temperamentos",
      "Ambiente seguro para partilhas",
    ],
  },
  {
    step: "Módulo 4",
    title: "Imersão, formatura e continuidade",
    description:
      "Conclusão da jornada com almoço especial, certificação, memória registrada e entrada na comunidade exclusiva.",
    bullets: [
      "Encontro final com almoço e cerimônia de formatura",
      "Registro profissional de fotos e memórias",
      "Ingresso no Clube das Guardiãs do Lar",
    ],
  },
] satisfies ModuleItem[];

export const testimonials = [
  {
    name: "Nome da aluna",
    role: "Participante da Mentoria do Lar",
    quote:
      "Placeholder elegante para depoimento real. Substitua por uma fala autêntica de transformação, resultado e percepção de valor da experiência.",
    highlight: "Transformação percebida no ambiente da casa e da família.",
  },
  {
    name: "Nome da aluna",
    role: "Participante da Mentoria do Lar",
    quote:
      "Placeholder elegante para depoimento real. Use este espaço para narrar uma mudança prática vivida ao longo dos encontros.",
    highlight: "Sentimento de acolhimento, direção e pertencimento.",
  },
  {
    name: "Nome da aluna",
    role: "Participante da Mentoria do Lar",
    quote:
      "Placeholder elegante para depoimento real. Aqui pode entrar uma fala curta e emocional com reforço de autoridade e confiança.",
    highlight: "Experiência premium com suporte próximo da mentora.",
  },
] satisfies TestimonialItem[];

export const faqItems = [
  {
    question: "Como funciona a inscrição?",
    answer:
      "Você preenche o formulário, recebe a validação da inscrição e segue para o pagamento pelo checkout. Após a confirmação, Sabrina direciona individualmente a turma e o calendário.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim. Todos os CTAs levam para um checkout preparado para integração com provedores como Stripe, Mercado Pago, Hotmart, Kirvano e Perfect Pay.",
  },
  {
    question: "Recebo confirmação?",
    answer:
      "Sim. Depois do envio do cadastro e da conclusão do pagamento, a confirmação é apresentada e o contato da participante segue para o fluxo de suporte.",
  },
  {
    question: "Posso tirar dúvidas?",
    answer:
      "Sim. A landing já prevê contato por WhatsApp e e-mail para dúvidas antes e depois da inscrição.",
  },
  {
    question: "Existem vagas limitadas?",
    answer:
      "Sim. O formato é intencionalmente exclusivo e presencial, com número controlado de participantes para manter a qualidade da experiência.",
  },
  {
    question: "Como funciona o acesso?",
    answer:
      "A inscrição garante acesso à próxima turma. Depois da confirmação, cada participante recebe individualmente as orientações sobre sua turma e o calendário.",
  },
] satisfies FaqItem[];
