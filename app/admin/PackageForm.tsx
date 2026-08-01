 className="w-full rounded-xl border p-4"
      />

      <textarea
        name="exclusions"
        rows={4}
        placeholder="Package Exclusions"
        value={form.exclusions}
        onChange={updateField}
        className="w-full rounded-xl border p-4"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
      >
        Save Package
      </button>
    </form>
  );
}