import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClicked from './components/ClassClikced';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecyleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
import User from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
    
      <div className="App">

        <UserProvider value = "hulya">
          <ComponentC />
        </UserProvider>
        

        {/* <Counter2 
          render = {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        />

        <Counter2 
          render = {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* <HoverCounter2 />
        <User render = {(isLoggedIn) => isLoggedIn ? "Hulya" : " Guest"} /> */}
        

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <ErrorBoundry>
        <Hero heroName = "Batman" />
        </ErrorBoundry>

        <ErrorBoundry>
          <Hero heroName = "Superman" />
          </ErrorBoundry>

          <ErrorBoundry>
           <Hero heroName = "Joker" />
           </ErrorBoundry>

        
         */}
  
       {/* <StyleSheet primary ={true} /> */}

       {/* <Message /> */}
  
        {/* function components with props*/}
        {/* <Greet  name = "Bruce"  heroName = "Batman">
          <p>This is children of first Greet</p>
        </Greet>  */}
  
        {/* <Greet  name = "Alice" heroName = "SuperMan">
          <button>Button</button>
        </Greet>
        
        <Greet  name = "Lana" heroName = "WonderWomen"/>
  
        {/* class components with props*/}
        {/* <Welcome name = "Bruce"  heroName = "Batman" />
        <Welcome name = "Alice" heroName = "SuperMan"/>
        <Welcome name = "Lana" heroName = "WonderWomen" /> */}
  
        
        {/* function components with JSX*/}
        {/* <Hello /> */}
        
      </div>
    );
      
  }
  
}

export default App;
