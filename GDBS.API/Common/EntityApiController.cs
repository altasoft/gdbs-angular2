using GDBS.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Http;

namespace GDBS.API.Common
{
    public abstract class EntityApiController<TEntity> : ApiController
        where TEntity : class
    {
        protected GDBSEntities db = new GDBSEntities();


        public int GetTotalCount()
        {
            return db.Set<TEntity>()
                .AsNoTracking()
                .Count();
        }

        public IEnumerable<TEntity> GetList(int skip = 0, int take = 10, string sortKey = "Id", bool? sortAsc = null)
        {
            return db.Set<TEntity>()
                .AsNoTracking()
                .OrderByPropertyName(sortKey, sortAsc)
                .Skip(skip)
                .Take(take)
                .ToList();
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

public static class Extensions
{
    public static IQueryable<T> OrderByPropertyName<T>(this IQueryable<T> q, string SortField, bool? Ascending)
    {
        if (!Ascending.HasValue)
            Ascending = false;

        var param = Expression.Parameter(typeof(T), "p");
        var prop = Expression.Property(param, SortField);
        var exp = Expression.Lambda(prop, param);
        string method = Ascending == true ? "OrderBy" : "OrderByDescending";
        Type[] types = new Type[] { q.ElementType, exp.Body.Type };
        var rs = Expression.Call(typeof(Queryable), method, types, q.Expression, exp);
        return q.Provider.CreateQuery<T>(rs);
    }
}