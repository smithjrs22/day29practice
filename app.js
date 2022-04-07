useEffect(() => {
    axios
      .get('http://localhost:3001/api/notes')
      .then(res => {
        setNotes(res.data)
      })
  }, [])