using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using GDBS.API.Models;

namespace GDBS.API.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.
    */
    public class ServiceAgreementsController : ODataController
    {
        private GDBSEntities db = new GDBSEntities();

        // GET: odata/ServiceAgreements
        [EnableQuery]
        public IQueryable<ServiceAgreement> GetServiceAgreements()
        {
            return db.ServiceAgreements.Take(10);
        }

        // GET: odata/ServiceAgreements(5)
        [EnableQuery]
        public SingleResult<ServiceAgreement> GetServiceAgreement([FromODataUri] int key)
        {
            return SingleResult.Create(db.ServiceAgreements.Where(serviceAgreement => serviceAgreement.Id == key));
        }

        // PUT: odata/ServiceAgreements(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<ServiceAgreement> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ServiceAgreement serviceAgreement = db.ServiceAgreements.Find(key);
            if (serviceAgreement == null)
            {
                return NotFound();
            }

            patch.Put(serviceAgreement);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceAgreementExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(serviceAgreement);
        }

        // POST: odata/ServiceAgreements
        public IHttpActionResult Post(ServiceAgreement serviceAgreement)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ServiceAgreements.Add(serviceAgreement);
            db.SaveChanges();

            return Created(serviceAgreement);
        }

        // PATCH: odata/ServiceAgreements(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<ServiceAgreement> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ServiceAgreement serviceAgreement = db.ServiceAgreements.Find(key);
            if (serviceAgreement == null)
            {
                return NotFound();
            }

            patch.Patch(serviceAgreement);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServiceAgreementExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(serviceAgreement);
        }

        // DELETE: odata/ServiceAgreements(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            ServiceAgreement serviceAgreement = db.ServiceAgreements.Find(key);
            if (serviceAgreement == null)
            {
                return NotFound();
            }

            db.ServiceAgreements.Remove(serviceAgreement);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/ServiceAgreements(5)/SLA
        [EnableQuery]
        public SingleResult<SLA> GetSLA([FromODataUri] int key)
        {
            return SingleResult.Create(db.ServiceAgreements.Where(m => m.Id == key).Select(m => m.SLA));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ServiceAgreementExists(int key)
        {
            return db.ServiceAgreements.Count(e => e.Id == key) > 0;
        }
    }
}
