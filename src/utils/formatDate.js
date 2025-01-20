//Intl.DateTimeFormat is a BUILT IN javascript class
export const formatDate = (date)=>{
  return new Intl.DateTimeFormat('en-US',{
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(Date.parse(date)))
};