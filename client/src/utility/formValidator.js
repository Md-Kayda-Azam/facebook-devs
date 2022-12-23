

// registration validation 
export const regErrorFildes = (data, setToolBorder) => {
  const { fname, sname, emailorphone, password, day, month, year, gender,  gender_pronoun} = data;

  if(!fname){
  setToolBorder(prev => ({ ...prev, fname: true }));
  }
  if(!sname){
  setToolBorder(prev => ({ ...prev, sname: true }));
  }
  if(!emailorphone){
  setToolBorder(prev => ({ ...prev, emailorphone: true }));
  }
  if(!password){
  setToolBorder(prev => ({ ...prev, password: true }));
  }
  if(!day || !month || !year){
  setToolBorder(prev => ({ ...prev, year: true }));
  }
  if(year >= (new Date().getFullYear()-5)){
  setToolBorder(prev => ({ ...prev, year: true }));
  }
  if(!gender){
  setToolBorder(prev => ({ ...prev, gender: true }));
  }else{
    setToolBorder(prev => ({ ...prev, gender: false }));
  }
  if(gender === 'Custom'){

  if(!gender_pronoun){
    setToolBorder(prev => ({ ...prev, gender_pronoun: true }));
  }
 }

}
