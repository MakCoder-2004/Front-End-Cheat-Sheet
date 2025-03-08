import Alert from "./components/Alert/Alert";

const App = () => {
  return (
    <>
      <Alert
        title="Success"
        description="This is a success alert"
        type="success"
      />
      <Alert
        title="Danger"
        description="This is a Danger alert"
        type="danger"
      />
      <Alert
        title="Note"
        description="This is a note alert"
        type="note"
      />
      <Alert
        title="Take Care"
        description="This is a Take-Care alert"
        type="take-care"
      />
      <Alert
        title="Notification"
        description="This is a notification alert"
        type="notification"
      />
    </>
  );
};

export default App;
