// 역시 리덕스의 표준 액션 인터페이스를 사용한다.
import { Action } from "redux";

// 인자로 받을 리듀서의 키 밸류 맵이다.
// 리덕스의 액션 타입의 기본은 any로 되어있기 때문에 string으로 만든 액션을 상속받아서 사용한다.
type ReducerMap<A extends Action<string>, S> = {
  // 액션을 상속받은 A의 `type`의 타입들을 키로 사용한다.
  // 리듀서 함수의 인자로 넘어가는 액션은 그 키 타입에 맞는 액선을 끄집어내서(MatchedAction) 사용한다.
  [AT in A["type"]]?: (state: S, action: MatchedAction<A, AT>) => S;
} & { [key: string]: (state: S, action: Action) => S }; // 객체의 키 접근을 위한 인덱스 시그니쳐

// 인자로 받은 액션들(A) 중에 액션타입(T)이 일치하는 타입만 내보내고 나머지는 지운다.
type MatchedAction<A, T> = A extends Action<T> ? A : never;

const handleActions = <S, A extends Action<string>>(
  reducerMap: ReducerMap<A, S>,
  defaultState: S
) => (state = defaultState, action?: A): S =>
  action && reducerMap[action.type]
    ? reducerMap[action.type](state, action)
    : state;

export default handleActions;