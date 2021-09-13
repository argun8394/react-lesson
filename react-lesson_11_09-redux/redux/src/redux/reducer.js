//reducer.js
import {INCREASE_COUNTER, DECREASE_COUNTER, RESET} from "./ActionTypes";
//bu şekilde actionTypes dosyasında tanımlayıp, aşağıda string yerine değişken olarak kullanabilir ama çok kullanılmayan bir yöntem bu

//state in güncelleneceği yer

function reducer(state, action) { //reducer bir state ve bir action alır
    //switch yerine if-else ile de yapılabilir
    switch (action.type) { //action un type ını aldık
        case "INCREASE_COUNTER":
            state.counter = state.counter + 1; 
            return {...state} //case INCREASE_COUNTER olduğunda state.counter, state.counter a +1 ekle ve tüm state leri döndür
        case "DECREASE_COUNTER":
            state.counter > 0 ?
            (state.counter = state.counter - 1) : 
            (alert("Count sıfırdan küçük olamaz.."))
            return {...state} //case DECREASE_COUNTER olduğunda state.counter, 0 dan büyükse state.counter a -1 yap değilse uyarı ver ve sonra tüm state leri döndür
        case "RESET":
            state.counter = state.counter = 0; 
            // state.counter = action.payload; //buraya payload ekleyerek de sıfırlama işlemi yapabiliriz
            return {...state} //case RESET olduğunda state.counter ı sıfır yap ve tüm state leri döndür
        default:
            return state;
    }
}

export default reducer;