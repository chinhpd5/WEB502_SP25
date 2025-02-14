export default interface ICourse {
  id: string,
  courseName: string,
  views: number,
  thumbnail:string,
  note: string,
  category: string,
}

export type CourseInput = Omit<ICourse,'id'>