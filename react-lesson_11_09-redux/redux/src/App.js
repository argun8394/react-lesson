import './App.css';
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import {createStore} from "redux"; 
import {Provider} from "react-redux";
//her yerden ulaşabilmek için app.js te store yarattık ve sarmallamak için provider çağırdık
import reducer from "./redux/reducer";
import initialState from './redux/store';

const store = createStore(reducer, initialState);//createStore ile store oluşturuyoruz, burası içerisine bir store ve bir state alır

function App() {
  return (
    <Provider store={store}>{/*store umuzu burada tanımladık*/}
    <div className="App">
      <h1>Clarusway Test</h1>
      <ComponentA />
      <ComponentB />
    </div>
    </Provider>
  );
}

export default App;

//npm install redux react-redux ile ilgili yüklüyoruz

//view: react taki kodlarımız (örn. counter:0 ve arttırma butonu var)
//action: state e ne yapacağımızın adı (silme,arttırma/azaltma vs.) (Örn. bu da arttır komutumuz) reducer a gönderilmesi ile gerçekleşir
//dispatch: dispatch için actionu alıp reducer a gider
//reducer: arttırma işlemini gerçekleştirip state i günceller (store a gider)
//store: içinde sadece global de tutmak istediğimiz state lerimiz tutulur

//FARKLI BİR TANIM İLE;
// ActionCreator
//Bir state'in güncellenmesi için action tarafından tetiklenmesi gerekir. Nasıl güncellenmesi gerektiğini hangi fonksiyonların çalışması gerektiğini burada belirleriz.
// Store
//statelerin değerlerinin tutulduğu bir nevi depodur. Flux'da birden fazla store bulunurken Redux'da sadece bir tane store bulunur ve her iş burada yapılır.
// Reducer
//Reducer'lar store'da yapılacak değişiklikleri state'i değiştirmeden state'in kopyasını alarak değişiklikleri bunun üzerinde yapar. State direk olarak işlenmez bunun yerine state'ler parçalanır ve her bir parça kopyalanır daha sonra bütün bu parçalar yeni bir state içinde birleştirilir. Bu sayede eski ve yeni state bir arada saklanır. Bu teknoloji eski sürüme dönmeye olanak sağlar.
// Provider
//Store'un tüm uygulamaya etki etmesini sağlayan , uygulamanın etrafını sarmalayan bir yapıdır.
// Connect
//Eğer bir bileşen bir state'in güncellenmesini isterse connect()'i kullanarak kendini sarmalar.


//Action type: action adı (örn. LOGIN_FORM_SUBMIT)
//Action payload: değişecek veriler (örn. username:"alex", password:"12345")
//action creater 
// function authUser(form) {
//   return{
//     type:LOGIN_FORM_SUBMIT,
//     payload:form
//   }
// }
//dispatch (taşıyıcı)
// dispatch(authUser(form));

//Reducer:dispatch i alır ve store a iletir

//store:
// import {createStore} from 'redux';
// let store = createStore(rootReducer);
// let authInfo = {
//   username: "alex", 
//   password:"12345"
// }