using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using musicaAPI.Data;

namespace musicaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class musicaModelsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public musicaModelsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/musicaModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<musicaModel>>> GetMusicas()
        {
            return await _context.Musicas.ToListAsync();
        }

        // GET: api/musicaModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<musicaModel>> GetmusicaModel(int id)
        {
            var musicaModel = await _context.Musicas.FindAsync(id);

            if (musicaModel == null)
            {
                return NotFound();
            }

            return musicaModel;
        }

        // PUT: api/musicaModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutmusicaModel(int id, musicaModel musicaModel)
        {
            if (id != musicaModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(musicaModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!musicaModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/musicaModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<musicaModel>> PostmusicaModel(musicaModel musicaModel)
        {
            _context.Musicas.Add(musicaModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetmusicaModel", new { id = musicaModel.Id }, musicaModel);
        }

        // DELETE: api/musicaModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletemusicaModel(int id)
        {
            var musicaModel = await _context.Musicas.FindAsync(id);
            if (musicaModel == null)
            {
                return NotFound();
            }

            _context.Musicas.Remove(musicaModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool musicaModelExists(int id)
        {
            return _context.Musicas.Any(e => e.Id == id);
        }
    }
}
