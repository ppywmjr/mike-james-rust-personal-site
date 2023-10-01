import { ReactNode, BaseSyntheticEvent } from "react";

type ReactHookFormHandleSubmitReturn = (
  e?: BaseSyntheticEvent<object, any, any>
) => Promise<any>;

export type FormProps = {
  action: ReactHookFormHandleSubmitReturn;
  children?: ReactNode;
};
