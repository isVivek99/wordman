import ExpensiveComponent from './expensive-component';
import Game from './game';

const Application = () => {
  // when we are passing ExpensiveComponent as props
  // we are rendering it in a slot
  // here ExpensiveComp is passed as children
  // even though it is rendered inside Game it is outside it
  //this prevents the component from re-rendering when Game re-renders

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <Game>
        <div className="my-3">
          <ExpensiveComponent />
        </div>
      </Game>
    </main>
  );
};

export default Application;
