import { Card, Avatar } from "antd";
import { FundFilled, VideoCameraFilled } from "@ant-design/icons";

const { Meta } = Card;

interface CourseProps {
  from: number;
  to: number;
  type: string;
  day?: string;
  name: string;
  zoomLink: string;
  classroomLink: string;
}

const Course = (props: CourseProps) => {
  const { from, to, day, name, zoomLink, classroomLink, type } = props;

  const between = (max: number, min: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src={`https://img.chainrunners.xyz/api/v1/tokens/png/${between(
            5000,
            1
          )}`}
        />
      }
      actions={[
        <VideoCameraFilled
          key="zoom"
          onClick={() => {
            openInNewTab(zoomLink);
          }}
        />,
        <FundFilled
          key={"classroom"}
          onClick={() => {
            openInNewTab(classroomLink);
          }}
        />,
      ]}
    >
      <Meta
        avatar={
          <Avatar
            src={`https://img.chainrunners.xyz/api/v1/tokens/png/${between(
              5000,
              1
            )}`}
          />
        }
        title={`${name}-${type}`}
        description={`${from}-${to}`}
      />
    </Card>
  );
};

export default Course;
