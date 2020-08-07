import React from 'react';
import './App.css';
import { FindUsers } from './components/FindUsers';
import { FindUsersCustomHook } from './components/FindUsersCustomHook';
import { FindUsersImportedHook } from './components/FindUsersImportedHook';
import { FindUsersInjectedHook } from './components/FindUsersInjectedHook';
import { useUserCollection, useUserCollectionMock } from "./customHooks/useUserCollection"

function App() {
  return (
    <div className="App">
      <strong>Find Users Coupled React Hooks</strong><br />
      <FindUsers />
      <strong>Find Users Coupled Custom Hook (Same File)</strong><br />
      <FindUsersCustomHook />
      <strong>Find Users Coupled Custom Hook (Imported)</strong><br />
      <FindUsersImportedHook />
      <strong>Find Users Decoupled Custom Hook (Injection)</strong><br />
      <FindUsersInjectedHook useUserCollection={useUserCollection} />
      <strong>Find Users Decoupled Custom Hook (Mock Injection)</strong><br />
      <FindUsersInjectedHook useUserCollection={useUserCollectionMock} />
    </div>
  );
}

export default App;
