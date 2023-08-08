import React, { useState } from "react";
import "./Filter.css";
import {
  Col,
  Dropdown,
  Typography,
  Button,
  Row,
  Checkbox,
  Tag,
  Space,
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { CloseCircleOutlined } from "@ant-design/icons";
/*
Actions:

create:
- user click on some option in dropt down menu
- dropdown checkbox item should be checked
- crete new tag witht he same option name
- update user selected options

delete:
- click again on selected dopdown checkbox option
- checkbox should unchecked
- tag should removed
- update user selected options

- click on close button on tag
- checkbox should unchecked
- tag should removed
- update user selected options


code implementation:
- Read: read from data and show UI
- Update: listen to users action and update data

*/
// const [isChecked, setIsChecked] = useState(false);

// const onChange = (event) => {
//   setIsChecked(event.target.checked);
//   if()
// };

const log = (e) => {
  console.log(e);
};
const dietItems = [
  {
    key: "low-fat",
    label: <Checkbox onChange={onChange}>Low-Fat</Checkbox>,
  },
  {
    key: "balanced",
    label: <Checkbox onChange={onChange}>Balanced</Checkbox>,
  },
  {
    key: "high-protein",
    label: <Checkbox onChange={onChange}>High-Protein</Checkbox>,
  },
  {
    key: "low-carb",
    label: <Checkbox onChange={onChange}>Low-Carb</Checkbox>,
  },
  {
    key: "high-fiber",
    label: <Checkbox onChange={onChange}>High-Fiber</Checkbox>,
  },
];

const healthItems = [
  {
    key: "gluten-free",
    label: <Checkbox>Gluten-Free</Checkbox>,
  },
  {
    key: "paleo",
    label: <Checkbox>Paleo</Checkbox>,
  },
  {
    key: "vegan",
    label: <Checkbox>Vegan</Checkbox>,
  },
  {
    key: "vegetarian",
    label: <Checkbox>Vegetarian</Checkbox>,
  },
  {
    key: "keto-friendly",
    label: <Checkbox> Keto</Checkbox>,
  },
];

const cuisineTypeItems = [
  {
    key: "American",
    label: <Checkbox>American</Checkbox>,
  },
  {
    key: "Asian",
    label: <Checkbox>Asian</Checkbox>,
  },
  {
    key: "Italian",
    label: <Checkbox>Italian</Checkbox>,
  },
  {
    key: "Japanese",
    label: <Checkbox>Japanese</Checkbox>,
  },
  {
    key: "Mexican",
    label: <Checkbox>Mexican</Checkbox>,
  },
];

const Filter = () => {
  return (
    <>
      <div className="filter-style">
        <Row>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 6,
              offset: 2,
            }}
          >
            <Dropdown
              menu={{
                items: dietItems,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
              trigger={["click"]}
            >
              <Typography.Link>
                <Button>
                  Diets
                  <DownOutlined />
                </Button>
              </Typography.Link>
            </Dropdown>
          </Col>
          <Col
            xs={{
              span: 11,
              offset: 1,
            }}
            md={{
              span: 6,
              offset: 2,
            }}
          >
            <Dropdown
              menu={{
                items: cuisineTypeItems,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
              trigger={["click"]}
            >
              <Typography.Link>
                <Button>
                  Cuisine Type
                  <DownOutlined />
                </Button>
              </Typography.Link>
            </Dropdown>
          </Col>
          <Col
            xs={{
              span: 5,
              offset: 1,
            }}
            md={{
              span: 6,
              offset: 2,
            }}
          >
            <Dropdown
              menu={{
                items: healthItems,
                selectable: true,
                defaultSelectedKeys: ["3"],
              }}
              trigger={["click"]}
            >
              <Typography.Link>
                <Button>
                  Allergies
                  <DownOutlined />
                </Button>
              </Typography.Link>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <div className="filter-style">
        <Tag color="success" closeIcon={<CloseCircleOutlined />} onClose={log}>
          Vegan
        </Tag>
        <Tag color="gold" closeIcon={<CloseCircleOutlined />} onClose={log}>
          Low-Fat
        </Tag>
        <Tag color="purple" closeIcon={<CloseCircleOutlined />} onClose={log}>
          Low-Carb
        </Tag>
      </div>
    </>
  );
};
export default Filter;
