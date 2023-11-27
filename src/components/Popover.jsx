import { Button, OverlayTrigger, Popover } from "react-bootstrap";

function Messages() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Popover Title</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  return (
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="danger">Click to toggle popover</Button>
      </OverlayTrigger>
  );
}
export default Messages;
