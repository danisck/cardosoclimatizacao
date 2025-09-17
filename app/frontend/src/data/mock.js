import { 
  Snowflake, 
  Wrench, 
  Shield, 
  Users, 
  Award,
  Clock,
  Star,
  CheckCircle,
  Droplets,
  Settings,
  FileText
} from 'lucide-react';

export const mockData = {
  services: [
    {
      title: "Venda de Ar Condicionado",
      description: "Equipamentos de todas as marcas com os melhores preços e condições de pagamento.",
      icon: Snowflake,
      features: [
        "Todas as marcas disponíveis",
        "Melhores preços da região",
        "Condições especiais de pagamento",
        "Garantia de fábrica",
        "Entrega em Anchieta-ES"
      ]
    },
    {
      title: "Instalação Profissional",
      description: "Instalação técnica especializada com garantia e materiais de qualidade.",
      icon: Settings,
      features: [
        "Técnicos especializados",
        "Materiais de primeira linha",
        "Garantia de instalação",
        "Limpeza do local",
        "Teste completo do sistema"
      ]
    },
    {
      title: "Manutenção Preventiva",
      description: "Manutenção regular para manter seu ar condicionado funcionando perfeitamente.",
      icon: Wrench,
      features: [
        "Limpeza completa do sistema",
        "Verificação de gás refrigerante",
        "Teste de funcionamento",
        "Troca de filtros",
        "Relatório técnico detalhado"
      ]
    },
    {
      title: "Higienização Completa",
      description: "Limpeza profunda para eliminar bactérias, fungos e garantir ar puro.",
      icon: Droplets,
      features: [
        "Produtos certificados pela ANVISA",
        "Eliminação de bactérias e fungos",
        "Melhoria da qualidade do ar",
        "Redução de alergias",
        "Certificado de higienização"
      ]
    },
    {
      title: "Contratos de Manutenção",
      description: "Planos personalizados para manutenção regular de seus equipamentos.",
      icon: FileText,
      features: [
        "Visitas programadas",
        "Preços especiais",
        "Prioridade no atendimento",
        "Descontos em peças",
        "Relatórios mensais"
      ]
    },
    {
      title: "PMOC - Plano de Manutenção",
      description: "Plano de Manutenção, Operação e Controle conforme legislação vigente.",
      icon: Shield,
      features: [
        "Conformidade com a legislação",
        "Documentação completa",
        "Certificações técnicas",
        "Adequação às normas",
        "Relatórios oficiais"
      ]
    }
  ],

  differentials: [
    {
      title: "12 Anos de Experiência",
      description: "Experiência sólida no mercado de climatização em Anchieta e região.",
      icon: Award
    },
    {
      title: "Milhares de Clientes",
      description: "Atendemos milhares de clientes satisfeitos em toda a região.",
      icon: Users
    },
    {
      title: "Pontualidade Garantida",
      description: "Sempre atendemos nossos clientes no horário marcado.",
      icon: Clock
    },
    {
      title: "Qualidade Certificada",
      description: "Serviços com garantia e qualidade comprovada.",
      icon: Shield
    }
  ],

  testimonials: [
    {
      name: "Cliente Satisfeita",
      location: "Anchieta-ES",
      comment: "Quero deixar registrado o excelente serviço que recebi na instalação do ar-condicionado. Fiz a instalação na minha loja e fiquei muito satisfeita com o resultado. O atendimento foi rápido, organizado e de muita qualidade. Além da instalação bem feita, recebi todas as orientações necessárias para manter o aparelho funcionando corretamente. Recomendo de olhos fechados!",
      service: "Instalação"
    },
    {
      name: "Cliente Satisfeito",
      location: "Anchieta-ES",
      comment: "Contratei a empresa para a instalação de quatro aparelhos de ar-condicionado (três unidades de 12.000 BTUs e uma de 30.000 BTUs) e fiquei extremamente satisfeito com o serviço prestado. Destaco a pontualidade da equipe, o preço justo praticado e, principalmente, a qualidade da instalação realizada. Recomendo com confiança a todos que buscam profissionalismo e excelência.",
      service: "Instalação"
    },
    {
      name: "Cliente Satisfeito",
      location: "Anchieta-ES",
      comment: "A Cardoso climatização foi indicação de um amigo, a correia do dia não me dava tempo para fazer a compra do ar condicionado para depois encontrar um técnico para instalação, eles forneceram o ar condicionado e instalação do produto com bastante rapidez e eficiência e muito comprometimento, na data e horário marcado estava lá para a instalação do meu novo ar, profissional de alto padrão, gostei muito!",
      service: "Venda + Instalação"
    },
    {
      name: "Cliente Satisfeita",
      location: "Anchieta-ES",
      comment: "Contratei várias empresas para colocar meu ar condicionado para funcionar, nenhum profissional encontrou o problema, eu já sem esperança me indicaram a Cardoso Climatização, o rapaz foi lá, muito atencioso, educado e prestativo, Jean o nome dele, verificou todo o aparelho, deu trabalho, mas encontrou o problema, estou muito satisfeita com o trabalho e com o capricho no trabalho.",
      service: "Manutenção"
    }
  ]
};