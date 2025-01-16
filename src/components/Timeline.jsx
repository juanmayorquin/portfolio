import TimelineItem from "./TimelineItem"

/* eslint-disable react/prop-types */
const Timeline = ({events}) => {
  return (
    <div className="timeline relative flex flex-col gap-10">
        <div className="timeline-line w-1 h-full absolute left-2"></div>
        {events && events.map((course, index) => (
          <TimelineItem
            key={index}
            title={course.title}
            school={course.school}
            skills={course.skills}
            initYear={course.initDate}
            finishYear={course.finishDate}
          />
        ))}
      </div>
  )
}

export default Timeline