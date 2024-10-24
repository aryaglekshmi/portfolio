export interface IMail {
  to_name: string;
  from_name: string;
  message: string;
  from_phone: string;
  from_email: string;
  subject: string;
  reply_to: string;
}

export interface ISkill {
  name: string,
  id:string,
  icon:string,
  href:string
}