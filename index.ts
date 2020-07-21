// interfaces, types, enums

/**
 * This is my useful documentation
 */
interface Toast {
  message: string;
  type: Status;
  /**
   * Time in milliseconds of how long the toast will be displayed
   * @default 300
   */
  time?: number;
  dismissable?: boolean;
  readonly timestamp: Date;
}


type Status = 'success' | 'error';


enum StatusEnum { // like type, but better :3
  Success,
  Error,
}


const toast: Toast = {
  message: 'Hello world',
  type: 'error',
  timestamp: new Date(),

};

toast.timestamp = new Date();




// composition
interface IsLoading {
  isLoading: boolean;
}

interface ToastAndLoading extends Toast, IsLoading {}
const toastAndLoading: ToastAndLoading = {
  
};




// dynamic props:
interface Attributes {
  [attr: string]: number;
}

const attrs: Attributes = {
  lalala: 1222,
  name: 'sdsfcsada'
};


// Named props

export type Nutrients =
  | 'energy'
  | 'calories'
  | 'fat'
  | 'saturates'
  | 'sugar'
  | 'fibre'
  | 'protein'
  | 'salt';


type NutritionProfile = {
  [kasdasd in Nutrients]?: number;
} & {
  name: string;
};

const nutrientProfile: NutritionProfile = {
  calories: 123123,
  name: 'asdasd'
};

// go to types
