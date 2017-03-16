initSidebarItems({"enum":[["InputOrigin","What kind of source an input file ultimately came from. We keep track of this in order to be able to emit Makefile-style dependencies for input files. Right now, we only provide enough options to achieve this goal; we could add more."],["OpenResult",""]],"fn":[["try_open_file",""]],"mod":[["filesystem",""],["genuine_stdout",""],["itarbundle",""],["local_cache",""],["memory",""],["stack",""],["testing",""],["zipbundle",""]],"struct":[["InputHandle","Input handles are basically Read objects with a few extras. We don't require the standard io::Seek because we need to provide a dummy implementation for GZip streams, which we wouldn't be allowed to do because both the trait and the target struct are outside of our crate."],["OutputHandle",""]],"trait":[["InputFeatures",""],["IoProvider",""]]});