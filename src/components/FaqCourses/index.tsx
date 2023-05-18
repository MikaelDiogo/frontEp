import { TbTargetArrow } from "react-icons/tb";
import "./styles.css";

interface faqProps {
  questionCourse: string;
  answerCourse: string;
}
interface FaqQuestionProps {
  faq: faqProps[] | undefined;
}

export function FaqCourses({ faq }: FaqQuestionProps) {
  const faqItem = (answerCourse: string, questionCourse: string) => {
    return (
      <div className="faqQuestion">
        <div>
          <TbTargetArrow size={80} color="#00a84a" />
        </div>
        <div className="textsFaq">
          <h1>{questionCourse}</h1>
          <p>{answerCourse}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="faqCourses">
      <div className="faqTitle">
      <h1>FAQ</h1>
      </div>
      <div className="arrayQuestions">
        {faq!.map((faq) => {
          return faqItem(faq.answerCourse, faq.questionCourse);
        })}
      </div>
    </div>
  );
}
