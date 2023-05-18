import CoordinatorAvatar from "../assets/Avata.png";
import InfoCurriculum from "../assets/imgs/info-curriculum.png";
import EnfCurriculum from "../assets/imgs/enf-curriculum.png";
import ComercioCurriculum from "../assets/imgs/comercio-curriculum.png";
import AdmCurriculum from "../assets/imgs/adm-curriculum.png";

import { useParams } from "react-router-dom";

import { DescriptionTeacher } from "../components/DescriptionTeacher";
import { Footer } from "../components/Footer";
import { FaqCourses } from "../components/FaqCourses";
import { NavNews } from "../components/NavNews";
import { ObjectivesAndActing } from "../components/ObjectivesAndActing";

export const Course = () => {
  const { curso } = useParams();

  const cursos = [
    {
      name: "informatica",
      descriptionTeacher: {
        courseName: "Informática",
        coordinatorName: "Adeilson Sales Aragão - COORDENADOR DO CURSO",
        image: CoordinatorAvatar,
        coordinatorDescription:
          "Possui Bacharelado em Sistema de Informação pela Universidade Federal do Ceará (2014). Pós-graduação em Banco de Dados pelo Instituto Superior de Educação Programus (2018). Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Informação.",
      },
      objectiveAndActing: {
        objectiveCourse:
          "O eixo tecnológico de Informação e Comunicação compreende tecnologias relacionadas à infraestrutura e processos de comunicação e processamento de dados e informações. Abrange concepção, desenvolvimento, implantação, operação, avaliação e manutenção de sistemas e tecnologias relacionadas à informática e às telecomunicações; especificação de componentes ou equipamentos; suporte técnico; procedimentos de instalação e configuração; realização de testes e medições; utilização de protocolos e arquitetura de redes; identificação de meios físicos e padrões de comunicação; desenvolvimento de sistemas informatizados; e tecnologias de comutação, transmissão e recepção de dados.",
        actingAreas:
          "Órgãos públicos municipais, estaduais e federais. Fábricas de Softwares. Empresa de Desenvolvimento. Lojas de T.I. Empresas de Suporte e Manutenção de Computadores. Empresas de Telecomunicações (Provedores de Internet e Telefonia). CPD - Central de Processamento de Dados. Empresas de Suporte Técnico ao Usuário. Empresas que necessitam de informatização de processos.",
        curriculumImage: InfoCurriculum,
      },
      faqCourses: [
        {
          questionCourse: "Qual a carga horária do curso e do estágio?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a média de aprovação desse curso?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a nota de corte das inscrições do último ano?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    },

    {
      name: "enfermagem",
      descriptionTeacher: {
        courseName: "Enfermagem",
        coordinatorName:
          "Francisco Arlysson Da Silva Verissimo - COORDENADOR DO CURSO",
        image: CoordinatorAvatar,
        coordinatorDescription:
          "Possui especialização em saúde pública, especialização educação profissional, tecnologia e ciência, MBA em gestão pública e mestre em ensino na saúde.",
      },
      objectiveAndActing: {
        objectiveCourse:
          "Compreende tecnologias associadas à melhoria da qualidade de vida, à preservação e utilização da natureza, desenvolvimento e inovação do aparato tecnológico de suporte e atenção à saúde. Abrange ações de proteção e preservação dos seres vivos e dos recursos ambientais, da segurança de pessoas e comunidades, do controle e avaliação de risco, programas de educação ambiental.",
        actingAreas:
          "Centro de Saúde da Família, Centro de Referência em Saúde do Trabalhador, Fábricas, indústrias, associações e cooperativas. Organizações não governamentais.",
        curriculumImage: EnfCurriculum,
      },
      faqCourses: [
        {
          questionCourse: "Qual a carga horária do curso e do estágio?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a média de aprovação desse curso?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a nota de corte das inscrições do último ano?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    },

    {
      name: "comercio",
      descriptionTeacher: {
        courseName: "Comércio",
        coordinatorName: "Edivaldo Soares Coelho Júnior - COORDENADOR DO CURSO",
        image: CoordinatorAvatar,
        coordinatorDescription:
          "Bacharel em Ciências Contábeis, Bacharelando em Administração, Especialista em Recursos Humanos, MBA em Marketing e gestão de equipe e MBA em gestão de negócios.",
      },
      objectiveAndActing: {
        objectiveCourse:
          "O eixo tecnológico de Gestão e Negócios compreende tecnologias associadas a instrumentos, técnicas, estratégias e mecanismos de gestão. Abrange planejamento, avaliação e gestão de pessoas e de processos referentes a negócios e serviços presentes em organizações e instituições públicas ou privadas, de todos os portes e ramos de atuação; busca da qualidade, produtividade e competitividade; utilização de tecnologias organizacionais; comercialização de produtos; e estratégias de marketing, logística e finanças.",
        actingAreas:
          "Supermercados ou Hipermercados. Lojas de confecção e acessórios. Sapatarias e acessórios. Lojas de Departamentos. Lojas de Materiais Esportivos. Outlets. Farmácias. Shopping Centers. Óticas. Distribuidoras ou Lojas de Cosméticos e Perfumarias. Concessionárias de veículos ou motocicletas. Lojas de Móveis, Eletros e Eletrônicos. Lojas de Auto Peças para veículos e motocicletas. Empresas prestadoras de serviços em geral (setor público e privado).",
        curriculumImage: ComercioCurriculum,
      },
      faqCourses: [
        {
          questionCourse: "Qual a carga horária do curso e do estágio?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a média de aprovação desse curso?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a nota de corte das inscrições do último ano?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    },

    {
      name: "administracao",
      descriptionTeacher: {
        courseName: "Administração",
        coordinatorName: "Edivaldo Soares Coelho Júnior - COORDENADOR DO CURSO",
        image: CoordinatorAvatar,
        coordinatorDescription:
          "Bacharel em Ciências Contábeis, Bacharelando em Administração, Especialista em Recursos Humanos, MBA em Marketing e gestão de equipe e MBA em gestão de negócios.",
      },
      objectiveAndActing: {
        objectiveCourse: "Loading...",
        actingAreas: "Loading...",
        curriculumImage: AdmCurriculum,
      },
      faqCourses: [
        {
          questionCourse: "Qual a carga horária do curso e do estágio?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a média de aprovação desse curso?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
        {
          questionCourse: "Qual a nota de corte das inscrições do último ano?",
          answerCourse: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        },
      ],
    },
  ];

  const chosen = cursos.find((Item) => Item.name == curso);

  return (
    <div>
      <NavNews />
      <div style={{ padding: "6rem 12.2rem" }}>
        <DescriptionTeacher
          courseName={chosen?.descriptionTeacher.courseName}
          coordinatorName={chosen?.descriptionTeacher.coordinatorName}
          description={chosen?.descriptionTeacher.coordinatorDescription}
          image={chosen?.descriptionTeacher.image}
        />

        <ObjectivesAndActing
          objectiveCourse={chosen?.objectiveAndActing?.objectiveCourse}
          actingAreas={chosen?.objectiveAndActing?.actingAreas}
          image={chosen?.objectiveAndActing.curriculumImage}
        />
      </div>

      <FaqCourses faq={chosen?.faqCourses}/>
      <Footer />
    </div>
  );
};
