import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle, 
  Snowflake, 
  Wrench, 
  Shield, 
  Users, 
  Award,
  MessageCircle,
  PhoneCall
} from 'lucide-react';
import { mockData } from '../data/mock';

const LandingPage = () => {
  const whatsappNumber = "5528999035150";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para climatização.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/images/logo-cardoso-climatizacao (2).png" 
                alt="Cardoso Climatização" 
                className="h-16 w-auto"
              />
            </div>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Gemini_Generated_Image_fsi0pnfsi0pnfsi0.png')`
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Climatização Profissional em 
              <span className="text-blue-400"> Anchieta-ES</span>
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
              Há mais de 9 anos levando conforto térmico para milhares de clientes em Anchieta e região. 
              Instalação, manutenção e higienização de ar condicionado com garantia e qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar Orçamento Grátis
              </Button>
              <Button 
                variant="outline" 
                onClick={handleWhatsAppClick}
                className="border-white border-2 text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-lg backdrop-blur-sm"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                (28) 99903-5150
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-100">
                <Award className="h-5 w-5 text-blue-400" />
                <span className="font-medium drop-shadow-sm">Mais de 9 anos de experiência</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-100">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="font-medium drop-shadow-sm">Milhares de clientes satisfeitos</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-100">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="font-medium drop-shadow-sm">Garantia em todos os serviços</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em climatização para residências e empresas em Anchieta-ES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit group-hover:bg-blue-200 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Por Que Escolher a Cardoso Climatização?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nossos diferenciais garantem o melhor atendimento e qualidade em Anchieta e região
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.differentials.map((differential, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md w-fit">
                  <differential.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{differential.title}</h4>
                <p className="text-gray-600">{differential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">O Que Nossos Clientes Dizem</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depoimentos reais de clientes satisfeitos em Anchieta-ES
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-900">{testimonial.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                  <Badge variant="secondary" className="mt-3">{testimonial.service}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nossos Trabalhos</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Confira alguns dos nossos trabalhos realizados em Anchieta-ES e região
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.47 (1).jpeg"
                alt="Ar condicionado instalado"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Instalação Residencial</h4>
                  <p className="text-sm">Ar condicionado instalado com perfeição</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.48.jpeg"
                alt="Equipamentos Gree"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Equipamentos Premium</h4>
                  <p className="text-sm">Trabalhamos com as melhores marcas</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.42 (2).jpeg"
                alt="Técnico em manutenção"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Manutenção Especializada</h4>
                  <p className="text-sm">Técnicos qualificados e experientes</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.42 (1).jpeg"
                alt="Veículo da empresa"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Atendimento Regional</h4>
                  <p className="text-sm">Cobrimos toda Anchieta-ES e região</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.44.jpeg"
                alt="Instalação elétrica"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Instalação Elétrica</h4>
                  <p className="text-sm">Serviços elétricos complementares</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/Gemini_Generated_Image_fsi0pnfsi0pnfsi0 (2).png"
                alt="Climatização moderna"
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Climatização Moderna</h4>
                  <p className="text-sm">Soluções avançadas em climatização</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/Gemini_Generated_Image_fsi0pnfsi0pnfsi0 (1).png"
                alt="Tecnologia em climatização"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Tecnologia Avançada</h4>
                  <p className="text-sm">Equipamentos de última geração</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.44 (1).jpeg"
                alt="Serviço técnico especializado"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Serviço Técnico</h4>
                  <p className="text-sm">Profissionais qualificados em ação</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.46 (2).jpeg"
                alt="Instalação profissional"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Instalação Profissional</h4>
                  <p className="text-sm">Cada detalhe é cuidadosamente executado</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="/images/WhatsApp Image 2025-09-05 at 11.21.47 (2).jpeg"
                alt="Trabalho de qualidade"
                className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-lg font-semibold mb-2">Trabalho de Qualidade</h4>
                  <p className="text-sm">Excelência em cada serviço prestado</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-blue-600 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-white text-center hover:bg-blue-700 transition-colors duration-300">
              <Snowflake className="h-12 w-12 mb-4" />
              <h4 className="text-xl font-bold mb-2">Precisa dos Nossos Serviços?</h4>
              <p className="text-blue-100 mb-4">Entre em contato e solicite seu orçamento</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Sobre a Cardoso Climatização</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-4">Jean Silva Cardoso</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Jean Silva Cardoso trabalhou por 9 anos em uma empresa e identificou a necessidade que a população 
                  tinha de uma empresa séria e compromissada com a prestação de serviço de venda, 
                  instalação e manutenção de ar condicionado.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Diante dessa necessidade, Jean decidiu abrir sua própria empresa para atender essa clientela. Hoje a Cardoso Climatização 
                  possui milhares de clientes em Anchieta-ES e em toda região, prestando um ótimo atendimento 
                  e um serviço de ótima qualidade com garantia.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>Rua das Gaivotas, S/N, Casa, Bairro Benevente - Anchieta-ES, CEP: 29230-000</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>Segunda a Sábado: 08:00 às 20:00</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span>(28) 99903-5150</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h5 className="text-xl font-semibold text-gray-900 mb-4">Nossos Valores</h5>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Qualidade em todos os serviços prestados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Pontualidade e cumprimento de horários</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Trabalho com as melhores marcas do mercado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Ótimas formas de pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">Excelente pós-venda e garantia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Precisa de Climatização em Anchieta-ES?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Entre em contato agora mesmo e solicite seu orçamento gratuito. 
              Atendemos toda a região com qualidade e garantia!
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/images/logo-cardoso-climatizacao.png" 
                  alt="Cardoso Climatização Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-300 mb-4">
                Climatização profissional em Anchieta-ES. Qualidade, garantia e atendimento excepcional.
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Serviços</h5>
              <ul className="space-y-2 text-gray-300">
                <li>Venda de Ar Condicionado</li>
                <li>Instalação Profissional</li>
                <li>Manutenção Preventiva</li>
                <li>Higienização Completa</li>
                <li>Contratos de Manutenção</li>
                <li>PMOC</li>
                <li>Projetos Especiais</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contato</h5>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Rua das Gaivotas, S/N, Casa, Bairro Benevente<br />Anchieta-ES, CEP: 29230-000</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(28) 99903-5150</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Seg-Sáb: 08:00-20:00</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cardoso Climatização. Todos os direitos reservados.</p>
            <p className="text-sm mt-1">
              Climatização em Anchieta-ES | Ar Condicionado | Instalação | Manutenção
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;