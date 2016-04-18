using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GDBS.API.Models
{
    public class SLAModel
    {
        public string FunctionType { get; set; }
        public string OwnershipType { get; set; }
        public string ServiceType { get; set; }
        public string RegularWarrantyDepositLimit { get; set; }
        public string FrozenWarrantyDepositLimit { get; set; }
        public string OldCustomerNumber { get; set; }
        public string Description { get; set; }
        public string State { get; set; }
        public string GeneralContractNumber { get; set; }
        public string SupplyPointNumber { get; set; }
        public string ServiceUnitId { get; set; }
        public string SMSService { get; set; }
        public string MeterPoint { get; set; }
        public string ContactPerson { get; set; }
        public string DocId { get; set; }
        public string WebUrl { get; set; }

        public List<string> MeterPoints { get; set; }
        public List<ContactPersonModel> ContactPersons { get; set; }
    }

    public class ContactPersonModel
    {
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
    }
}