//
//  AppDelegate.swift
//  RandomPassword
//
//  Created by chendong on 2023/1/21.
//

import Cocoa

@main
class AppDelegate: NSObject, NSApplicationDelegate {
    weak var mainWindowController: MainWindowController?
    
    func applicationDidFinishLaunching(_ aNotification: Notification) {
//        NSLog("applicationDidFinishLaunching");
        let mainWindowController = MainWindowController();
        mainWindowController.showWindow(self);
//        NSLog("main window show");
        self.mainWindowController = mainWindowController;
    }

    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }

    func applicationSupportsSecureRestorableState(_ app: NSApplication) -> Bool {
        return true
    }


}

