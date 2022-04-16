import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CustomSider, Course } from "../../components";
import data from "../../data/courses.json";

interface Day {
  day: string;
  courses: Array<Course>;
}

interface Course {
  name: string;
  type: string;
  zoomLink: string;
  classroomLink: string;
  from: number;
  to: number;
}

const Courses = () => {
  const { dayName } = useParams();
  const [dayData, setdayData] = useState<Day>();
  useEffect(() => {
    data.map((item) => {
      if (item.day === dayName) {
        setdayData(item);
      }
    });
  }, []);

  return (
    <CustomSider>
      <Row justify="center" gutter={[24, 24]} style={{ height: "100vh" }}>
        {dayData &&
          dayData?.courses.map((item, i) => {
            return (
              <Col
                // xs={{ span: 5, offset: 1 }}
                lg={{ span: 6, offset: 2 }}
                key={i}
              >
                <Course
                  from={item.from}
                  type={item.type}
                  to={item.to}
                  name={item.name}
                  zoomLink={item.zoomLink}
                  classroomLink={item.classroomLink}
                />
              </Col>
            );
          })}
      </Row>
    </CustomSider>
  );
};

export default Courses;
