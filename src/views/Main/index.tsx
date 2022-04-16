import { Col, Row, Empty } from "antd";
import { useEffect, useState } from "react";
import { Course, CustomSider } from "../../components";
import data from "../../data/courses.json";
interface DateCustom {
  day: string;
  hour: number;
}

const dayTransalator = (date: Date): string => {
  switch (date.getDay()) {
    case 1:
      return "Lunes";
    case 2:
      return "Martes";
    case 3:
      return "Miercoles";
    case 4:
      return "Jueves";
    case 5:
      return "Viernes";
    case 6:
      return "Sabado";
    case 7:
      return "Domingo";
    default:
      return "";
  }
};

function Main() {
  const [dateNow, setdateNow] = useState<DateCustom>({ day: "", hour: 0 });

  useEffect(() => {
    var dateNow = new Date().toLocaleString("en-US", {
      timeZone: "America/Lima",
    });
    const dateNow1 = new Date(dateNow);
    return () => {
      setdateNow({ day: dayTransalator(dateNow1), hour: dateNow1.getHours() });
    };
  }, []);
  const finalData: {
    name: string;
    type: string;
    zoomLink: string;
    classroomLink: string;
    from: number;
    to: number;
  }[] = [];
  data
    .filter((item) => item.day === dateNow.day)
    .map((item) =>
      item.courses.map((course) => {
        if (course.from >= dateNow.hour - 1) {
          finalData.push(course);
        }
      })
    );

  if (finalData.length > 0) {
    return (
      <CustomSider>
        <Row justify="center">
          <Col style={{ width: "100%" }}>
            <h1>Cursos ahora</h1>
          </Col>
          <Row style={{ height: "100vh" }}>
            {dateNow &&
              finalData.map((courses, i, array) => {
                return (
                  <Col lg={{ span: 6, offset: 2 }} key={i}>
                    <Course
                      from={courses.from}
                      type={courses.type}
                      to={courses.to}
                      name={courses.name}
                      zoomLink={courses.zoomLink}
                      classroomLink={courses.classroomLink}
                    />
                  </Col>
                );
              })}
          </Row>
        </Row>
      </CustomSider>
    );
  } else {
    return (
      <CustomSider>
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
          <Empty
            description={<span>No hay cursos por el momento.</span>}
          ></Empty>
        </Row>
      </CustomSider>
    );
  }
}

export default Main;
