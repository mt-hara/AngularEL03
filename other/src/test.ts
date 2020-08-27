import {getUserRepository, User} from "./index";

export async function gettter(){
try{
  const repository = await getUserRepository();
  const user= new User();
  user.name="test";
  user.age=20
  const result = await repository.save(user);
  console.log("sccess");
}catch (e){
  throw e;
}
}

gettter();