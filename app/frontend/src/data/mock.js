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
      title: "9 Anos de Experiência",
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
      name: "Maria Santos",
      location: "Centro, Anchieta-ES",
      comment: "Excelente atendimento! Instalaram meu ar condicionado no prazo e com muita qualidade. Jean é muito profissional e pontual.",
      service: "Instalação"
    },
    {
      name: "Carlos Oliveira",
      location: "Benevente, Anchieta-ES",
      comment: "Já é o terceiro equipamento que compro com a Cardoso. Preço justo, qualidade e um pós-venda excepcional. Recomendo!",
      service: "Venda + Instalação"
    },
    {
      name: "Ana Paula Costa",
      location: "Ubu, Anchieta-ES",
      comment: "A manutenção foi perfeita! Meu ar condicionado voltou a funcionar como novo. Atendimento nota 10!",
      service: "Manutenção"
    }
  ]
};