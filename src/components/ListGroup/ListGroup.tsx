import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;
interface ListItemProps {
  active: boolean;
}
const Li = styled.li<ListItemProps>`
  padding: 1rem;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedindex, setSelectedindex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items found</p>}
      <List className="list-group">
        {items.map((item, index) => (
          <Li
            active={index === selectedindex}
            className={
              selectedindex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedindex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </Li>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
