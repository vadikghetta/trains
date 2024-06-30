

export interface ITrainsRoot {
  name: string
  description: string
  characteristics: ITrainsCharacteristic[]
}

export interface ITrainsCharacteristic {
  speed: number | string
  force: number | string
  engineAmperage: number | string
}