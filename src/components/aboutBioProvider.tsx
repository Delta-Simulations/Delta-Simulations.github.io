import { type FC } from 'react'

type T_AboutBioProviderProps = {
  name: string
  bio: string
  image: string
  imageLeft?: boolean
}

export const AboutBioProvider: FC<T_AboutBioProviderProps> = (props: T_AboutBioProviderProps): JSX.Element => {
  if (props.imageLeft) {
    return (
      <div className=" h-fit bg-black/70 p-10 rounded-3xl border-2 border-yellow-500/20 flex flex-col items-center gap-10">
        <div className="text-3xl text-yellow-500">{props.name}</div>
        <div className=" flex flex-row w-full  items-center justify-between">
          <div className="w-2/5">
            <img src={props.image} className=" w-full" alt="bio" />
          </div>
          <div className="w-1/2 text-slate-300 ">{props.bio}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="h-fit bg-black/70 p-10 rounded-3xl flex border-2 border-yellow-500/20 flex-col items-center gap-10">
        <div className="text-3xl text-yellow-500">{props.name}</div>
        <div className=" flex flex-row w-full items-center justify-between">
          <div className="w-1/2 text-slate-300">{props.bio}</div>
          <div className="w-2/5">
            <img src={props.image} className=" w-full" alt="bio" />
          </div>
        </div>
      </div>
    )
  }
}
