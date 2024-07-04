export default function DispatchEvent() {
  const onCallDispatchEvent = () => {
    console.log("onCallDispatchEvent");
    document
      .getElementById("root")
      ?.dispatchEvent(new Event("click", { bubbles: true })); // dispatchEvent를 통해 이벤트를 실행
  };

  const onCallClick = () => {
    console.log("onCallClick");
    document.getElementById('root')?.click(); // click 메소드를 통해 실행
  };

  return <div>
    <p>DispatchEvent</p>
    <button onClick={onCallDispatchEvent}>call dispatchEvent</button>
    <button onClick={onCallClick}>call click</button>
  </div>;
}
