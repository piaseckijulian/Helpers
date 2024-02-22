interface AnyObject {
  [key: string]: any;
}

const pluck = (array: AnyObject[], key: string) => array.map(obj => obj[key]);

export default pluck;
