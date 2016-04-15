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

namespace GDBS.API.Controllers
{
    public class ServiceAgreementController : EntityApiController<ServiceAgreement>
    {
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

        [ResponseType(typeof(void))]
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


        private bool ServiceAgreementExists(int id)
        {
            return db.ServiceAgreements.Count(e => e.Id == id) > 0;
        }
    }

}
