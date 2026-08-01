className="rounded-xl border p-4"
        />

        <select className="rounded-xl border p-4">
          <option>Travellers</option>
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>Family</option>
        </select>

        <button
          onClick={searchHoliday}
          className="rounded-xl bg-blue-700 p-4 font-bold text-white hover:bg-blue-800"
        >
          Search Holiday
        </button>

      </div>
    </section>
  );
}