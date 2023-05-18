import './styles.css'

interface CourseBlockProps{
  courseLogo?: string;
  courseAreaName: string;
}

export function CourseBlock({ courseAreaName, courseLogo}: CourseBlockProps ) {
  return (
    <div className='courseBlock'>
      <div className='courseFrame'>
        <img src={courseLogo} alt="" />
      </div>
      <p>{courseAreaName}</p>
    </div>
  )
}
