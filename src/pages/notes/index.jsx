import React from "react";
import Link from "next/link";

const NotesIndex = () => {
  const notes = new Array(15)
    .fill(1)
    .map((e, i) => ({ id: i, title: `Note: ${i}` }));

  return (
    <div>
      <h1>Notes</h1>

      {notes.map((note) => {
        <div>
          <Link key={note.id} href={"/notes/[id]"} as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>;
      })}
    </div>
  );
};

export default NotesIndex;

// import React from 'react'
// import Link from 'next/link'; // client side routing

// const NoteIndexPath = () => (
//     <div>
//       <h1>Note Index Path</h1>
//       {/* 'href' - put the file name. 'as' - pass in an id with the actual path */}
//       <Link href={"/notes/[id]"} as={"/notes/1"}>
//         <a>Note 1</a>
//       </Link>
//     </div>
//   );

// export default NoteIndexPath
