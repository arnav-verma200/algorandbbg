import { Contract, GlobalState } from '@algorandfoundation/algorand-typescript'

// Define BookLibrary contract
export class BookLibrary extends Contract {

  // Global state to store last added book
  bookRecord = GlobalState<string>({ key: "bookRecord", initialValue: "" })

  // Function to add a new book
  AddBook(title: string, author: string): string {
    const record = `Title: ${title}, Author: ${author}`
    this.bookRecord.value = record
    return title // return title just as a confirmation
  }

  // Function to fetch last added book
  GetBook(): string {
    return this.bookRecord.value
  }
}