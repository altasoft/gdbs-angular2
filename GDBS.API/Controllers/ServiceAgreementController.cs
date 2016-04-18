using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using GDBS.API.Models;
using System.Linq.Expressions;
using GDBS.API.Common;
using System.Web.Http.Cors;

namespace GDBS.API.Controllers
{
    [EnableCors("*", "*", "*")]
    public class ServiceAgreementController : EntityApiController<ServiceAgreement>
    {
        [HttpGet]
        public bool CheckMeterPointAdminNumber(string id)
        {
            return id.Length > 5;
        }

        [HttpPost]
        public void Create(SLAModel item)
        {

        }


        [ResponseType(typeof(ServiceAgreement))]
        public IHttpActionResult GetServiceAgreement(int id)
        {
            ServiceAgreement serviceAgreement = db.ServiceAgreements.Find(id);
            if (serviceAgreement == null)
            {
                return NotFound();
            }

            return Ok(serviceAgreement);
        }

        [HttpPost, ResponseType(typeof(void))]
        public IHttpActionResult PutServiceAgreement(int id, ServiceAgreement serviceAgreement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != serviceAgreement.Id)
            {
                return BadRequest();
            }

            db.Entry(serviceAgreement).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceAgreementExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ResponseType(typeof(ServiceAgreement))]
        public IHttpActionResult PostServiceAgreement(ServiceAgreement serviceAgreement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ServiceAgreements.Add(serviceAgreement);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = serviceAgreement.Id }, serviceAgreement);
        }

        [ResponseType(typeof(ServiceAgreement))]
        public IHttpActionResult DeleteServiceAgreement(int id)
        {
            ServiceAgreement serviceAgreement = db.ServiceAgreements.Find(id);
            if (serviceAgreement == null)
            {
                return NotFound();
            }

            db.ServiceAgreements.Remove(serviceAgreement);
            db.SaveChanges();

            return Ok(serviceAgreement);
        }




        bool ServiceAgreementExists(int id)
        {
            return db.ServiceAgreements.Count(e => e.Id == id) > 0;
        }
    }
}
