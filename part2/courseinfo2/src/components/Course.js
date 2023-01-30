const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name}></Header>
    {  <Content parts={course.parts}></Content>}
    </div>
  );
};

const Header = ({ name }) => <h1>{name}</h1>;
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((x) => (
        <Part key={x.id} part={x} />
      ))}
      <Total parts={parts} />
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <b>Total of {total} exercises </b>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

export default Course;