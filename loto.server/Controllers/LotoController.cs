using loto.server.Helper;
using Microsoft.AspNetCore.Mvc;

namespace loto.server.Controllers
{
    [Route("api/[controller]/[action]")]
    public class LotoController : Controller
    {
        [HttpGet]
        public string GetSayisalLotoDates()
        {
            var url = "http://www.mpi.gov.tr/sonuclar/listCekilisleriTarihleri.php?tur=sayisal";
            return HttpRequest.GET(url);
        }

        [HttpGet("{id}")]
        public string GetSayisalLotoResult(int id)
        {
            var url = "http://www.mpi.gov.tr/sonuclar/cekilisler/sayisal/" + id + ".json";
            return HttpRequest.GET(url);
        }

        [HttpGet]
        public string GetSansTopuDates()
        {
            var url = "http://www.mpi.gov.tr/sonuclar/listCekilisleriTarihleri.php?tur=sanstopu";
            return HttpRequest.GET(url);
        }

        [HttpGet("{id}")]
        public string GetSansTopuResult(int id)
        {
            var url = "http://www.mpi.gov.tr/sonuclar/cekilisler/sanstopu/" + id + ".json";
            return HttpRequest.GET(url);
        }

        [HttpGet]
        public string GetOnNumaraDates()
        {
            var url = "http://www.mpi.gov.tr/sonuclar/listCekilisleriTarihleri.php?tur=onnumara";
            return HttpRequest.GET(url);
        }

        [HttpGet("{id}")]
        public string GetOnNumaraResult(int id)
        {
            var url = "http://www.mpi.gov.tr/sonuclar/cekilisler/onnumara/" + id + ".json";
            return HttpRequest.GET(url);
        }

        [HttpGet]
        public string GetSuperLotoDates()
        {
            var url = "http://www.mpi.gov.tr/sonuclar/listCekilisleriTarihleri.php?tur=superloto";
            return HttpRequest.GET(url);
        }

        [HttpGet("{id}")]
        public string GetSuperLotoResult(int id)
        {
            var url = "http://www.mpi.gov.tr/sonuclar/cekilisler/superloto/" + id + ".json";
            return HttpRequest.GET(url);
        }
    }
}