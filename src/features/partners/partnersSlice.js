import { PARTNERS } from "../../app/shared/PARTNERS";

export const selectAllPartners = ()=> PARTNERS;


export const selectFeaturedPartner = ()=>
  PARTNERS.find((partner)=>
    partner.featured
  );
